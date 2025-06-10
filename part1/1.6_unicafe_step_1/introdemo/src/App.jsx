
const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

import { useState } from 'react'

const App = () => {
  // const [value, setValue] = useState(10)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  // const setToValue = (newValue) => {
  //   console.log('value now', newValue)
  //   setValue(newValue)
  // }

  const setToGood = newValue => {
    setGood(newValue);
  }
  const setToNeutral = newValue => {
    setNeutral(newValue);
  }
  const setToBad = newValue => {
    setBad(newValue);
  }
  return (
    <div>
       <Display text="give feedback"  />
     <Button onClick={() => setToGood(good+1)} text="good" />
      <Button onClick={() => setToNeutral(neutral+1)} text="neutral" />
      <Button onClick={() => setToBad(bad + 1)} text="bad" />
      <Display text="statistics"  />
      <History good={good} neutral={neutral} bad={bad}></History>
    </div>
  )
}

const Display = props => <h1>{props.text}</h1>

const History = (props) => {
  if (props.good.length === 0 || props.neutral.length === 0 || props.bad.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      <p>good : {props.good}</p>
      <p>neutral : {props.neutral}</p>
      <p>bad : {props.bad}</p>
    </div>
  )
}
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

export default App