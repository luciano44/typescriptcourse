import { useState } from "react"
import Heading from "./components/Heading"
import Section from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"

const App = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <Heading title="hey buddy" />
      <Section title="my title">Hello</Section>
      <Counter setCount={setCount}>Counter is {count}</Counter>
      <List
        items={["🍕 Pizza", "🌙 Moon", "🏈 Football"]}
        render={(item: string) => <span className="bold gold">{item}</span>}
      />
    </>
  )
}

export default App
