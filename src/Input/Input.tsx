import React, {ChangeEvent, useState} from 'react';

type InputTypeProps = {
    value: string
    setValue: (value : string) => void
}
export const Input = (props: InputTypeProps) => {


    const onChangeInputHandle = (event: ChangeEvent<HTMLInputElement>) => {
        props.setValue(event.currentTarget.value)
    }

    return (
        <input value={props.value} onChange={onChangeInputHandle}/>
    );
};







