// import React, {useState} from 'react';
// import './App.css';
// import {Header} from './site/Header';
// import {Body, differentCities} from './site/Body';
// import {Footer} from './site/Footer';
// import {NewComponent} from './site/NewComponent';
// import {TopCars} from './site/TopCars';
// import MoneyFilter from './MoneyFilter/MoneyFilter';
// import {Input} from './Input/Input';
// import {Button} from './Input/Button';
//
//
// // export type FilterValuesType = 'all' | 'completed' | 'active';
//
// function App() {
//     // const students = [
//     //     {id: 1, name: 'James', age: 8},
//     //     {id: 2, name: 'Robert', age: 38},
//     //     {id: 3, name: 'John', age: 28},
//     //     {id: 4, name: 'Michael', age: 18},
//     //     {id: 5, name: 'Williams', age: 28},
//     //     {id: 6, name: 'David', age: 58},
//     //     {id: 7, name: 'Richard', age: 68},
//     //     {id: 8, name: 'Joseph', age: 44},
//     //     {id: 9, name: 'Thomas', age: 33},
//     //     {id: 10, name: 'Charles', age: 22},
//     //     {id: 11, name: 'Christopher', age: 11},
//     // ];
//     //
//     // const topCars = [
//     //     {manufacturer: 'BMW', model: 'm5cs'},
//     //     {manufacturer: 'Mercedes', model: 'e63s'},
//     //     {manufacturer: 'Audi', model: 'rs6'}
//     // ]
//
//     // const ButtonFoo1 = (subscriber : string) => {
//     //     console.log(subscriber)
//     // }
//     //
//     // const ButtonFoo2 = (subscriber : string) => {
//     //     console.log(subscriber)
//     // }
//
//
//     // const [money, setMoney] = useState([
//     //     {banknote: 'Dollars', nominal: 100, number: ' a1234567890'},
//     //     {banknote: 'Dollars', nominal: 50, number: ' z1234567890'},
//     //     {banknote: 'Rubles', nominal: 100, number: ' w1234567890'},
//     //     {banknote: 'Dollars', nominal: 100, number: ' e1234567890'},
//     //     {banknote: 'Dollars', nominal: 50, number: ' c1234567890'},
//     //     {banknote: 'Rubles', nominal: 100, number: ' r1234567890'},
//     //     {banknote: 'Dollars', nominal: 50, number: ' x1234567890'},
//     //     {banknote: 'Rubles', nominal: 50, number: ' v1234567890'},
//     // ]);
//     //
//     // let nominalMoney = money
//     //
//     // const [filter, setFilter] = useState('All')
//     //
//     // if (filter === 'Rubles') {
//     //     nominalMoney = money.filter((filterMoney) => {
//     //         return filterMoney.banknote === 'Rubles';
//     //     });
//     // }
//     //
//     // if (filter === 'Dollars') {
//     //     nominalMoney = money.filter((filterMoney) => {
//     //         return filterMoney.banknote === 'Dollars';
//     //     });
//     // }
//     //
//     // const oneClickHandler = (nameButton: string) => {
//     //     setFilter(nameButton)
//     // }
//
//     let [message, setMessage] = useState([  // к примеру данные пришли с сервера
//         {message: 'message1'},
//         {message: 'message2'},
//         {message: 'message3'},
//     ])
//
// const [value , setValue] = useState('')
//
//     const AddMessage = () => {
//         let newMessage =  {message: value};
//         setMessage([ newMessage,...message])
//     }
//
//     return (
//         // <NewComponent students={students}/>
//         // <TopCars  topCars={topCars}/>
//         //  <MoneyFilter nominalMoney={nominalMoney} callBack={oneClickHandler}/>
//
//         <div className={'App'}>
//            <Input value={value} setValue={setValue}/>
//             <Button callback={AddMessage}/>
//
//
//             <div>
//                 {message.map((el, index) => {
//                     return (
//                         <div key={index}>
//                             {el.message}
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }
//
//
// export default App
//
//
//


import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';
type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GraphQL', isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: 'HTML&CSS2', isDone: true},
            {id: v1(), title: 'JS2', isDone: true},
            {id: v1(), title: 'ReactJS2', isDone: false},
            {id: v1(), title: 'Rest API2', isDone: false},
            {id: v1(), title: 'GraphQL2', isDone: false},
        ]
    });


    function removeTask(todolistID: string, id: string) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(f => f.id !== id)})
    }

    function addTask(todolistID: string, title: string) {
        let task = {id: v1(), title: title, isDone: false};
   setTasks({...tasks, [todolistID]: [...tasks[todolistID], task]})
    }

    function changeStatus(todolistID : string,taskId: string, isDone: boolean) {
    setTasks({...tasks, [todolistID] : tasks[todolistID].map(f => f.id === taskId ? {...f, isDone : isDone} : f )})
    }


    function changeFilter(todolistID: string, value: FilterValuesType) {
        setTodolists(todolists.map(td => td.id === todolistID ? {...td, filter: value} : td))
    }

    const removeTodolist = (todolistID: string) => {


    }


    return (
        <div className="App">
            {todolists.map(td => {

                let tasksForTodolist = tasks[td.id];

                if (td.filter === 'active') {
                    tasksForTodolist = tasks[td.id].filter(t => !t.isDone);
                }
                if (td.filter === 'completed') {
                    tasksForTodolist = tasks[td.id].filter(t => t.isDone);
                }
                return (
                    <Todolist key={td.id}
                              todolistID={td.id}
                              title={td.title}
                              tasks={tasksForTodolist}
                              removeTask={removeTask}
                              changeFilter={changeFilter}
                              addTask={addTask}
                              changeTaskStatus={changeStatus}
                              filter={td.filter}
                              removeTodolist={removeTodolist}
                    />
                )
            })}

        </div>
    );
}

export default App;



