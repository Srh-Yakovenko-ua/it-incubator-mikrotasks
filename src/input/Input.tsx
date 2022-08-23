import React from 'react';

type InputProps ={
    message : Array<MessageProps>
}
type MessageProps ={
    message : string
}

export const Input = (props : InputProps) => {


    return (
        <div>
            <input type="text"/>
            <button>+</button>
            <div>
                {props.message.map((el, index) => {
                    return (
                        <div key={index}>
                            {el.message}
                        </div>
                    );
                })}
            </div>
        </div>

    )
}
