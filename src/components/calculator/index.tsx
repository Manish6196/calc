import { useState, useReducer } from 'react'

import Button from 'components/button'
import { ButtonIds } from 'types/button.types'
import { buttons } from 'utils/button.utils'
import { calculate } from 'utils/compute.utils'
import {
  DisplayValueActions,
  displayValueReducer,
  displayValueInitialState,
} from './DisplayValue.reducer'
import styles from './Calculator.module.css'

function Calculator(): JSX.Element {
  const [{ displayValue }, dispatch] = useReducer(
    displayValueReducer,
    displayValueInitialState
  )
  const [degreesMode, setDegreesMode] = useState<boolean>(true)

  const appendToDisplay = (value: string | undefined): void => {
    if (!value) return
    dispatch({
      type: ['0', 'Syntax Error'].includes(displayValue)
        ? DisplayValueActions.SET
        : DisplayValueActions.APPEND,
      payload: value,
    })
  }

  const backSpace = (): void => {
    if (displayValue?.length <= 1) {
      dispatch({
        type: DisplayValueActions.RESET,
      })
    } else {
      dispatch({
        type: DisplayValueActions.POP,
      })
    }
  }

  const clearDisplay = (): void => {
    dispatch({
      type: DisplayValueActions.RESET,
    })
  }

  const computeResult = (): void => {
    dispatch({
      type: DisplayValueActions.SET,
      payload: calculate(displayValue, { degreesMode }),
    })
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
