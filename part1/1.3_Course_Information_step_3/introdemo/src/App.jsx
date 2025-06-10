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
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
  return (
    <div>
      <Header course={course}/>
      <Content part={[part1.name,part2.name,part3.name]} exercises={[part1.exercises,part2.exercises,part3.exercises]}></Content>
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}></Total>
    </div>
  )
}

export default App