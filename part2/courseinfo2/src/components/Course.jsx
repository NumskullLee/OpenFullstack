import Header from './Header'
import Contetn from './Content';

const Course = (props) =>{
    
    return(
        <>
            <Header title={props.course.name}/>
            <Contetn parts={props.course.parts}/>
        </>
    )
}

export default Course
