const Content = (props) => {

    return (<>
    <Part exercises={props.part[0].name} part={props.part[0].exercises}></Part>
    <Part exercises={props.part[1].name} part={props.part[1].exercises}></Part>
    <Part exercises={props.part[2].name} part={props.part[2].exercises}></Part>
    </>)
}

const Part = ({exercises,part}) => {
    return (
    <>
        <p>{exercises} {part}</p>
        </>)

}

export default Content;