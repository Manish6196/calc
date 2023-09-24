import { CalculateOptions } from 'types/compute.types'
import { replacementList } from 'constants/compute.constants'

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

export const calculate = (
  displayValue: string,
  { degreesMode }: CalculateOptions
): string => {
  try {
    let valueString = displayValue

    if (degreesMode) {
      valueString = replaceWithRadians(valueString)
    }

    if (valueString.includes('!')) {
      valueString = valueString.replace(/[\d]*!/g, match => {
        return String(factorial(Number(match.slice(0, match.length - 1))))
      })
    }

    replacementList.forEach(({ key, pattern, replacement }) => {
      if (valueString.includes(key)) {
        valueString = valueString.replace(pattern, replacement)
      }
    })

    return evalSafe(valueString).toString()
  } catch (e) {
    return 'Syntax Error'
  }
}
