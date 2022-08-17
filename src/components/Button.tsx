import React from 'react';

type ButtonPropsType = {
    name : string
}

 export const Button = (props : ButtonPropsType) => {
    return (
        <div>
            <button>{props.name}</button>

        </div>
    );
}



