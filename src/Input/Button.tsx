import React from 'react';

type ButtonType = {
    callback: () => void
}

export const Button = (props: ButtonType) => {

    // const onClickHandler = () => {
    //     props.callback()
    // }

    return (
        <button onClick={props.callback}>add</button>
    );
};




