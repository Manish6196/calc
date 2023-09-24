import { useState } from 'react'

import Button from 'components/button'
import { ButtonIds } from 'types/button.types'
import { buttons } from 'utils/button.utils'
import { calculate } from 'utils/compute.utils'
import styles from './Calculator.module.css'

function Calculator(): JSX.Element {
  const [displayValue, setDisplayValue] = useState<string>('0')
  const [degreesMode, setDegreesMode] = useState<boolean>(true)

  const appendToDisplay = (value: string): void => {
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
    try {
      setDisplayValue(d => calculate(d, { degreesMode }))
    } catch (error) {
      setDisplayValue('Syntax Error')
    }
  }

  const toggleDegreesRadians = (): void => {
    setDegreesMode(d => !d)
  }

  const getTextById = (id: string): string => {
    if (id === ButtonIds.degreeOrRadian) {
      return degreesMode ? 'deg' : 'rad'
    }
    return ''
  }

  const getClickHandlerById = (
    id: string
  ): ((v: string | undefined) => void) => {
    if (id === ButtonIds.degreeOrRadian) {
      return toggleDegreesRadians
    }
    if (id === ButtonIds.equal) {
      return computeResult
    }
    if (id === ButtonIds.clearEntry) {
      return backSpace
    }
    if (id === ButtonIds.allClear) {
      return clearDisplay
    }
    return appendToDisplay as (value: string | undefined) => void
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
