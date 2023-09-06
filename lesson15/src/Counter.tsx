import { ReactNode } from "react"
import { useCounter, useCounterText } from "./context/CounterContex"

type ChildrenType = {
  children: (num: number) => ReactNode
}

export default function Counter({ children }: ChildrenType) {
  const { count, increment, decrement } = useCounter()
  const { text, handleTextInput } = useCounterText()

  return (
    <>
      <h1>{children(count)}</h1>
      <h1>Text: {text}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <input onChange={handleTextInput} type="text" />
      </div>
    </>
  )
}
