type StudentsType = {
    id: number
    name: string
    age:number
}

type NewComponentTYpe ={
    students:StudentsType[]
}
export const NewComponent = (props:NewComponentTYpe) =>{
    return (
        <ul>
            {props.students.map((el,index)=>{
                return(
                    <li key={el.id}>{el.name} age = {el.age}</li>
                )
            })}

            {/*<li>{props.students[0].name} age = {props.students[0].age}</li>*/}
            {/*<li>{props.students[1].name} age = {props.students[1].age}</li>*/}
            {/*<li>{props.students[2].name} age = {props.students[2].age}</li>*/}
        </ul>
    )
}