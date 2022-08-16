import React, {useState} from 'react';
import './App.css';
import {Header} from './site/Header';
import {Body, differentCities} from './site/Body';
import {Footer} from './site/Footer';
import {NewComponent} from './site/NewComponent';


function App() {
    const [students, setStudents] = useState([
        {id: 1, name: 'James', age: 8},
        {id: 2, name: 'Robert', age: 38},
        {id: 3, name: 'John', age: 28},
        {id: 4, name: 'Michael', age: 18},
        {id: 5, name: 'Williams', age: 28},
        {id: 6, name: 'David', age: 58},
        {id: 7, name: 'Richard', age: 68},
        {id: 8, name: 'Joseph', age: 44},
        {id: 9, name: 'Thomas', age: 33},
        {id: 10, name: 'Charles', age: 22},
        {id: 11, name: 'Christopher', age: 11},
        {id: 1, name: 'James', age: 8},
        {id: 2, name: 'Robert', age: 38},
        {id: 3, name: 'John', age: 28},
        {id: 4, name: 'Michael', age: 18},
        {id: 5, name: 'Williams', age: 28},
        {id: 6, name: 'David', age: 58},
        {id: 7, name: 'Richard', age: 68},
        {id: 8, name: 'Joseph', age: 44},
        {id: 9, name: 'Thomas', age: 33},
        {id: 10, name: 'Charles', age: 22},
        {id: 11, name: 'Christopher', age: 11},
    ]);


    return (
        <NewComponent students={students}/>
    );
}


export default App

