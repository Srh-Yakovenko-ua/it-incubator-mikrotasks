import React from 'react';

type TopCarsPropsType = {
    topCars: Array<TopCarsArrayType>
}

type TopCarsArrayType = {
    manufacturer: string
    model: string
}

export const TopCars = (props: TopCarsPropsType) => {

    return (
        <table>
            {props.topCars.map((ObjectTopCarsArray, index) => {
                return (
                    <tbody key={index + 1}>
                    <tr>
                        <td>{index + 1} : {ObjectTopCarsArray.manufacturer}</td>
                        <td>{ObjectTopCarsArray.model}</td>
                    </tr>
                    </tbody>

                )
            })}
        </table>
    );
}
















