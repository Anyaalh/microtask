import React from 'react';
import './App.css';
import Header from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./map/NewComponent";
import {Cars} from "./map/Cars";
import {Btn} from "./Btn/Btn";
import {UseStateComponent} from "./useState/UseStateComponent";

function App() {
    const students = [
        {id:1, name:"Ann", age:21},
        {id:2, name:"Eva", age:25},
        {id:3, name:"Masha", age:20},
    ]
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    return (
        <>
            <Header title={"New header"}/>
            <Body title={"New body"}/>
            <Footer/>
            <NewComponent students={students}/>
            <Cars topCars={topCars}/>
            <Btn/>
            <UseStateComponent/>
        </>
    );
}

export default App;
