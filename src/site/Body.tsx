import React from 'react';

type BodyPropsType = {
    titleForBody: string
    city: Array<ManyCityPropsType>
}

type ManyCityPropsType = {
    id: string
}


export const manyCity: Array<ManyCityPropsType> = [
    {id: 'Kharkiv'},
    {id: 'Kiev'},
    {id: 'Donetsk'},
];

export const Body = (props: BodyPropsType) => {
    return (
        <div>
            <h3>{props.titleForBody}</h3>
            <h6>{props.city[2].id}</h6>
        </div>
    );
}

