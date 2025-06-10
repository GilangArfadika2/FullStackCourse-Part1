
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
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [ave, setAve ] = useState(0)
  const [totalSum, setTotalSum] = useState(0)
  const [plusFeedback, setPlusFeedback] = useState(0);


  const handleFeedback = (newValue) => {
    const newGood = newValue === 'good' ? good+1 : good;
    const newNeutral = newValue === 'neutral'? neutral +1 : neutral;
    const newBad = newValue === 'bad' ? bad+ 1 : bad;
    const total = newGood + newNeutral + newBad;
    const ave = ((newGood*1) + (newNeutral*0) + (newNeutral*-1)) / total;
    const plusFeedback = (newGood / total)* 100;
    setGood(newGood);
    setNeutral(newNeutral);
    setBad(newBad);
    setAve(ave);
    setTotalSum(total);
    setPlusFeedback(plusFeedback);
  }

  return (
    <div>
       <Display text="give feedback"  />
     <Button onClick={() => handleFeedback('good')} text="good" />
      <Button onClick={() => handleFeedback('neutral')} text="neutral" />
      <Button onClick={() => handleFeedback('bad')} text="bad" />
      <Display text="statistics"  />
      <History good={good} neutral={neutral} bad={bad} ave={ave} totalSum={totalSum} plusFeedback={plusFeedback}></History>
    </div>
  )
}

const Display = props => <h1>{props.text}</h1>

const History = (props) => {
  if (props.totalSum == 0) {
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
      <p>all : {props.totalSum}</p>
      <p>average : {props.ave}</p>
      <p>positive feedback : {props.plusFeedback}%</p>
    </div>
  )
}
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

export default App