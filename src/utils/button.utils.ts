import {
  SingleButtonConfig,
  ButtonIds,
  ButtonVariants,
} from '../types/button.types'

const ButtonsMap: {
  [keys: string]: SingleButtonConfig
} = {
  [ButtonIds.factorial]: {
    text: 'x!',
    value: '!',
    variant: ButtonVariants.advanced,
  },
  [ButtonIds.ln]: {
    text: 'ln',
    value: 'ln(',
    variant: ButtonVariants.advanced,
  },
  [ButtonIds.log]: {
    text: 'log',
    value: 'log(',
    variant: ButtonVariants.advanced,
  },
  [ButtonIds.percentage]: {
    text: '%',
    value: '%',
    variant: ButtonVariants.advanced,
  },
  [ButtonIds.degreeOrRadian]: {
    text: '',
    variant: ButtonVariants.advanced,
  },
  [ButtonIds.sin]: {
    text: 'sin',
    value: 'sin(',
    variant: ButtonVariants.advanced,
  },
  [ButtonIds.cos]: {
    text: 'cos',
    value: 'cos(',
    variant: ButtonVariants.advanced,
  },
  [ButtonIds.tan]: {
    text: 'tan',
    value: 'tan(',
    variant: ButtonVariants.advanced,
  },
  [ButtonIds.parenthesisOpen]: {
    text: '(',
    value: '(',
    variant: ButtonVariants.advanced,
  },
  [ButtonIds.parenthesisClose]: {
    text: ')',
    value: ')',
    variant: ButtonVariants.advanced,
  },
  [ButtonIds.sqrt]: {
    text: '√',
    value: '√(',
    variant: ButtonVariants.advanced,
  },
  [ButtonIds.power]: {
    text: '^',
    value: '^',
    variant: ButtonVariants.advanced,
  },
  [ButtonIds.piConst]: {
    text: 'π',
    value: 'π',
    variant: ButtonVariants.advanced,
  },
  [ButtonIds.eularConst]: {
    text: 'e',
    value: 'e',
    variant: ButtonVariants.advanced,
  },
  [ButtonIds.clearEntry]: {
    text: 'CE',
    variant: ButtonVariants.advanced,
  },
  [ButtonIds.allClear]: {
    text: 'AC',
    variant: ButtonVariants.advanced,
  },
  [ButtonIds.seven]: {
    text: '7',
    value: '7',
  },
  [ButtonIds.eight]: {
    text: '8',
    value: '8',
  },
  [ButtonIds.nine]: {
    text: '9',
    value: '9',
  },
  [ButtonIds.devide]: {
    text: '/',
    value: '/',
  },
  [ButtonIds.four]: {
    text: '4',
    value: '4',
  },
  [ButtonIds.five]: {
    text: '5',
    value: '5',
  },
  [ButtonIds.six]: {
    text: '6',
    value: '6',
  },
  [ButtonIds.multiply]: {
    text: '*',
    value: '*',
  },
  [ButtonIds.one]: {
    text: '1',
    value: '1',
  },
  [ButtonIds.two]: {
    text: '2',
    value: '2',
  },
  [ButtonIds.three]: {
    text: '3',
    value: '3',
  },
  [ButtonIds.substract]: {
    text: '-',
    value: '-',
  },
  [ButtonIds.decimal]: {
    text: '.',
    value: '.',
  },
  [ButtonIds.zero]: {
    text: '0',
    value: '0',
  },
  [ButtonIds.equal]: {
    text: '=',
    variant: ButtonVariants.equal,
  },
  [ButtonIds.add]: {
    text: '+',
    value: '+',
  },
}

export const buttons = Object.keys(ButtonsMap).map(id => ({
  id,
  ...ButtonsMap[id],
}))
