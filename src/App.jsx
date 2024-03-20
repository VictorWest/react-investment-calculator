import { useState, useEffect } from "react"
import InputGroup from "./components/InputGroup"
import Result from "./components/Result"
import { calculateInvestmentResults } from "./util/investment"

function App() {
 const [inputText, setInputText] = useState({
      initial: 0,
      annual: 0,
      expected: 0,
      duration: 0,
  })
  const [results, setResults] = useState([])

  function handleChange(e){
    const title = e.target.classList[0]
    const value = parseFloat(e.target.value)
    setInputText(prevVal => {
      return {...prevVal, [title] : value}
    })
  }
  const [initialInvestment, setInitialInvestment] = useState()
  useEffect(() => {
    const { initial, annual, expected, duration } = inputText
    const results = calculateInvestmentResults({initialInvestment: initial, annualInvestment: annual, expectedReturn: expected, duration: duration})
    setResults(results)
  }, [inputText])
  console.log(initialInvestment);
  return (
    <>
      <InputGroup handleChange={handleChange}/>
      <Result results = {results} initialInvestment = {initialInvestment}/>
    </>
  )
}

export default App
