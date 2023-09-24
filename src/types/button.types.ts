export type SingleButtonConfig = {
  text: string
  value?: string
  variant?: ButtonVariants
}

export enum ButtonVariants {
  basic = 'basic',
  advanced = 'advanced',
  equal = 'equal',
}

export enum ButtonIds {
  factorial = 'factorial',
  ln = 'ln',
  log = 'log',
  percentage = 'percentage',
  degreeOrRadian = 'degreeOrRadian',
  sin = 'sin',
  cos = 'cos',
  tan = 'tan',
  parenthesisOpen = 'parenthesisOpen',
  parenthesisClose = 'parenthesisClose',
  sqrt = 'sqrt',
  power = 'power',
  piConst = 'piConst',
  eularConst = 'eularConst',
  clearEntry = 'clearEntry',
  allClear = 'allClear',
  add = 'add',
  substract = 'substract',
  devide = 'devide',
  multiply = 'multiply',
  equal = 'equal',
  decimal = 'decimal',
  one = 'one',
  two = 'two',
  three = 'three',
  four = 'four',
  five = 'five',
  six = 'six',
  seven = 'seven',
  eight = 'eight',
  nine = 'nine',
  zero = 'zero',
}
