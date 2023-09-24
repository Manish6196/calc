import { useState } from 'react'

import Button from 'components/button'
import { ButtonIds } from 'types/button.types'
import { buttons } from 'utils/button.utils'
import styles from './Calculator.module.css'

function App(): JSX.Element {
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

  const calculate = (): void => {
    function evalSafe(fn: string) {
      return new Function('return ' + fn)()
    }
    function factorial(n: number): number {
      if (n <= 1) return 1
      return n * factorial(n - 1)
    }
    function degreeToRadian(degree: number): number {
      const pi = Math.PI
      return (degree * pi) / 180
    }
    function replaceWithRadians(text: string) {
      const regex = /(sin|cos|tan)\((\d+(\.\d+)?)\)/g
      return text.replace(regex, (match, func, value) => {
        const degree = parseFloat(value)
        const radian = degreeToRadian(degree)
        switch (func) {
          case 'sin':
            return `sin(${radian})`
          case 'cos':
            return `cos(${radian})`
          case 'tan':
            return `tan(${radian})`
          default:
            return match
        }
      })
    }

    let valueString = displayValue

    if (degreesMode) {
      valueString = replaceWithRadians(valueString)
    }

    if (valueString.includes('!')) {
      valueString = valueString.replace(/[\d]*!/g, match => {
        return String(factorial(Number(match.slice(0, match.length - 1))))
      })
    }
    if (valueString.includes('log')) {
      valueString = valueString.replace('log', 'Math.log10')
    }
    if (valueString.includes('ln')) {
      valueString = valueString.replace('ln', 'Math.log')
    }
    if (valueString.includes('sin')) {
      valueString = valueString.replace('sin', 'Math.sin')
    }
    if (valueString.includes('cos')) {
      valueString = valueString.replace('cos', 'Math.cos')
    }
    if (valueString.includes('tan')) {
      valueString = valueString.replace('tan', 'Math.tan')
    }
    if (valueString.includes('√')) {
      valueString = valueString.replace('√', 'Math.sqrt')
    }
    if (valueString.includes('π')) {
      valueString = valueString.replace(/π/g, 'Math.PI')
    }
    if (valueString.includes('^')) {
      valueString = valueString.replace('^', '**')
    }

    try {
      setDisplayValue(evalSafe(valueString).toString())
    } catch (error) {
      setDisplayValue('Syntax Error')
    }
  }

  const toggleDegreesRadians = (): void => {
    setDegreesMode(d => !d)
  }

  const getTextById = (id: string): string => {
    console.log(id)

    if (id === ButtonIds.degreeOrRadian) {
      console.log('hit')

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
      return calculate
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

export default App
