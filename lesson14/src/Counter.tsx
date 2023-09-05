import { useState, ReactNode, useReducer, ChangeEvent } from "react"

type ChildrenType = {
  children: (num: number) => ReactNode
}

const initState = {
  count: 1,
  text: "",
}

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE
  payload?: string
}

const reducer = (
  state: typeof initState,
  action: ReducerAction
): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 }
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 }
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? "" }
    default:
      return state
  }
}

const Counter = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(reducer, initState)

  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value })
  }

  return (
    <>
      <h1>{children(state.count)}</h1>
      <h1>Text: {state.text}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <input onChange={handleTextInput} type="text" />
      </div>
    </>
  )
}

export default Counter
