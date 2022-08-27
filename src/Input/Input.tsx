import React, {ChangeEvent} from 'react';

type InputType = {
    value: string
    setValue: (value: string) => void
}
export const Input = (props: InputType) => {

    const onChangeHandler = (e: { currentTarget: { value: string; } }) => {
        props.setValue(e.currentTarget.value)
    }

    return (
        <input onChange={onChangeHandler}/>
    );
};










