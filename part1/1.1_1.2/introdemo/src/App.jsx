import Header from "./Header"
import Total from "./Total"
import Content from "./Content"

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      
      <Header course={course}/>
      <Content part={[part1,part2,part3]} exercises={[exercises1,exercises2,exercises3]}></Content>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}></Total>
    </div>
  )
}

export default App