import React, {useState} from 'react';
import './App.css';
import {Header} from './site/Header';
import {Body, differentCities} from './site/Body';
import {Footer} from './site/Footer';
import {NewComponent} from './site/NewComponent';
import {TopCars} from './site/TopCars';
import {Button} from './components/Button';


function App() {
    // const students = [
    //     {id: 1, name: 'James', age: 8},
    //     {id: 2, name: 'Robert', age: 38},
    //     {id: 3, name: 'John', age: 28},
    //     {id: 4, name: 'Michael', age: 18},
    //     {id: 5, name: 'Williams', age: 28},
    //     {id: 6, name: 'David', age: 58},
    //     {id: 7, name: 'Richard', age: 68},
    //     {id: 8, name: 'Joseph', age: 44},
    //     {id: 9, name: 'Thomas', age: 33},
    //     {id: 10, name: 'Charles', age: 22},
    //     {id: 11, name: 'Christopher', age: 11},
    // ];
    //
    // const topCars = [
    //     {manufacturer: 'BMW', model: 'm5cs'},
    //     {manufacturer: 'Mercedes', model: 'e63s'},
    //     {manufacturer: 'Audi', model: 'rs6'}
    // ]


    return (
        // <NewComponent students={students}/>
        // <TopCars  topCars={topCars}/>


        <div className={'App'}>
            <Button name={'Channel - 1'}/>
            <Button name={'Channel - 2'}/>

        </div>


    );
}


export default App

