const Content = (props) => {

    return (<>
    <Part exercises={props.exercises[0]} part={props.part[0]}></Part>
    <Part exercises={props.exercises[1]} part={props.part[1]}></Part>
    <Part exercises={props.exercises[2]} part={props.part[2]}></Part>
    </>)
}

const Part = ({exercises,part}) => {
    return (
    <>
        <p>{exercises} {part}</p>
        </>)

}

export default Content;