import { useState } from 'react'

import Button from 'components/button'
import { ButtonIds } from 'types/button.types'
import { buttons } from 'utils/button.utils'
import { calculate } from 'utils/compute.utils'
import styles from './Calculator.module.css'

function Calculator(): JSX.Element {
  const [displayValue, setDisplayValue] = useState<string>('0')
  const [degreesMode, setDegreesMode] = useState<boolean>(true)

  const appendToDisplay = (value: string | undefined): void => {
    if (value === undefined) return
    if (displayValue === '0' || displayValue === 'Syntax Error') {
      setDisplayValue(value)
    } else {
      setDisplayValue(displayValue + value)
    }
  }

  const backSpace = (): void => {
    setDisplayValue(d => {
      if (d.length <= 1) {
        return '0'
      } else {
        return d.slice(0, d.length - 1)
      }
    })
  }

  const clearDisplay = (): void => {
    setDisplayValue('0')
  }

  const computeResult = (): void => {
    setDisplayValue(d => calculate(d, { degreesMode }))
  }

  const toggleDegreesRadians = (): void => {
    setDegreesMode(d => !d)
  }

  const getTextById = (id: string): string => {
    switch (id) {
      case ButtonIds.degreeOrRadian:
        return degreesMode ? 'deg' : 'rad'
      default:
        return ''
    }
  }

  const getClickHandlerById = (
    id: string
  ): ((v: string | undefined) => void) => {
    switch (id) {
      case ButtonIds.degreeOrRadian:
        return toggleDegreesRadians
      case ButtonIds.equal:
        return computeResult
      case ButtonIds.clearEntry:
        return backSpace
      case ButtonIds.allClear:
        return clearDisplay
      default:
        return appendToDisplay
    }
  }

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>{displayValue}</div>
      <div className={styles.buttons}>
        {buttons.map(({ id, text, value, variant }) => {
          return (
            <Button
              text={text || getTextById(id)}
              value={value}
              variant={variant}
              onClick={getClickHandlerById(id)}
              key={id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Calculator
