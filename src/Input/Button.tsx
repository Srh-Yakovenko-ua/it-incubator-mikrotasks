import React from 'react';

type ButtonTypeProps = {
    name: string
    callback: () => void
}

export const Button = (props: ButtonTypeProps) => {

    const onClickButtonHandler = () => {
        props.callback()
    }

    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};





