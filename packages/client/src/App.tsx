import React, { useState } from "react"
import { NiceButton } from "ui"
import { sum } from "ui/utils"

const App = () => {
  const [a, setA] = useState("")
  const [b, setB] = useState("")
  const [result, setResult] = useState(0)

  return (
    <div>
      <h1>App</h1>
      <input
        type="text"
        value={a}
        onChange={(e) => setA(parseInt(e.target.value))}
      />
      <input
        type="text"
        value={b}
        onChange={(e) => setB(parseInt(e.target.value))}
      />
      <input type="number" value={result} readOnly />
      <NiceButton onClick={() => setResult(sum(a, b))}>CALC</NiceButton>
    </div>
  )
}
export default App
