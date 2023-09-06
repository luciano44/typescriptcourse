import Counter from "./Counter"
import { CounterProvider, initState } from "./context/CounterContex"

function App() {
  return (
    <>
      <CounterProvider count={initState.count} text={initState.text}>
        <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
      </CounterProvider>
    </>
  )
}

export default App
