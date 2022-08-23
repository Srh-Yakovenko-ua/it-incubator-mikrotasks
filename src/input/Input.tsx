import React, {ChangeEvent, useState} from 'react';


export const Input = () => {

    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
       setTitle(event.currentTarget.value)
    }

    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={() => {
            }}>+
            </button>
        </div>
    )
}





