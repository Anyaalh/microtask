import {useState} from "react";

export const UseStateComponent = () => {

    let [a, setA] = useState(1)


    const onclickHandler = () => {
        setA(++a)
        console.log(a)
    }

    const onclickHandler2 = () =>{
        setA(a=0)
    }

    return (
        <>
            <h1>{a}</h1>
            <button onClick={onclickHandler}>my button</button>
            <button onClick={onclickHandler2}>0</button>
        </>
    )
}