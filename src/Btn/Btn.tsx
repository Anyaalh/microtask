import { MouseEvent } from 'react';
import {Button} from "./components/Button";
export const Btn = () => {

//     const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
//         console.log("Hello i am Ann")
//     }
// const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
// console.log("Hi i am Dan")
// }

    // const onClickHandler = (name:string) => {
    //     console.log(name)
    // }

    const BtnFoo1 = (subscriber: string, age: number, address: string) =>{
        console.log(subscriber, age, address)
    }
    const BtnFoo2 = (subscriber: string) =>{
        console.log(subscriber)
    }
const StupidButtonFoo = () => {
        console.log("I am stupid button")
}

    return (
        <>
            {/*<button onClick={(event)=>{console.log("Hello")}}>MyYouTubeChannel-1</button>*/}

            {/*<button onClick={(event)=>onClickHandler("Ann")}>MyYouTubeChannel-1</button>*/}
            {/*<button onClick={(event)=>onClickHandler("Dan")}>MyYouTubeChannel-2</button>*/}

            <Button name={"MyYouTubeChannel-1"} callBack={()=>BtnFoo1("Ann", 21, "live in Minsk")}/>
            <Button name={"MyYouTubeChannel-2"} callBack={()=>BtnFoo2("Dan")}/>
            <Button name={"I am stupid button"} callBack={StupidButtonFoo}/>
        </>
        )
}