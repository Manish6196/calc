export type DisplayValueState = {
  displayValue: string
}

export const displayValueInitialState: DisplayValueState = { displayValue: '0' }

export enum DisplayValueActions {
  APPEND = 'APPEND',
  SET = 'SET',
  POP = 'POP',
  RESET = 'RESET',
}

type PayloadAction = {
  type: DisplayValueActions.APPEND | DisplayValueActions.SET
  payload: string
}

type NoPayloadAction = {
  type: DisplayValueActions.POP | DisplayValueActions.RESET
}

type DisplayValueAction = PayloadAction | NoPayloadAction

export function displayValueReducer(
  state: DisplayValueState,
  action: DisplayValueAction
) {
  switch (action.type) {
    case DisplayValueActions.APPEND:
      return {
        displayValue: state.displayValue + action.payload,
      }
    case DisplayValueActions.SET:
      return {
        displayValue: action.payload,
      }
    case DisplayValueActions.POP:
      return {
        displayValue: state.displayValue.slice(
          0,
          state.displayValue.length - 1
        ),
      }
    case DisplayValueActions.RESET:
      return {
        displayValue: '0',
      }
    default:
      return state
  }
}
