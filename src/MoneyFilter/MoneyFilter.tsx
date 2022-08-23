import React from 'react'


type MoneyFilterType = {
    nominalMoney: Array<nominalMoneyType>
    callBack: (nameButton: string) => void
}

type nominalMoneyType = {
    banknote: string
    nominal: number
    number: string
}

const MoneyFilter = (props: MoneyFilterType) => {

    // const oneClickHandler = (nameButton: string) => {
    //     props.callBack(nameButton)
    // }



    return (
        <>
            <ul>
                {props.nominalMoney.map((objectMoney, indexMoney) => {
                    return (
                        <li key={indexMoney}>
                            <span>{objectMoney.banknote}</span>
                            <span>{objectMoney.nominal}</span>
                            <span>{objectMoney.number}</span>
                        </li>
                    )
                })}
            </ul>

            <div style={{marginLeft: '10px'}}>
                <button onClick={() => props.callBack('All')}>All</button>
                <button onClick={() => props.callBack('Rubles')}>Rubles</button>
                <button onClick={() => props.callBack('Dollars')}>Dollars</button>
            </div>
        </>


    );

}

export default MoneyFilter;

