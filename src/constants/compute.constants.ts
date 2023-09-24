export const replacementList = [
  {
    key: 'log',
    pattern: 'log',
    replacement: 'Math.log10',
  },
  {
    key: 'ln',
    pattern: 'ln',
    replacement: 'Math.log',
  },
  {
    key: 'sin',
    pattern: 'sin',
    replacement: 'Math.sin',
  },
  {
    key: 'cos',
    pattern: 'cos',
    replacement: 'Math.cos',
  },
  {
    key: 'tan',
    pattern: 'tan',
    replacement: 'Math.tan',
  },
  {
    key: '√',
    pattern: '√',
    replacement: 'Math.sqrt',
  },
  {
    key: 'π',
    pattern: /π/g,
    replacement: 'Math.PI',
  },
  {
    key: 'e',
    pattern: /e/g,
    replacement: 'Math.E',
  },
  {
    key: '^',
    pattern: '^',
    replacement: '**',
  },
  {
    key: 'x',
    pattern: 'x',
    replacement: '*',
  },
]
