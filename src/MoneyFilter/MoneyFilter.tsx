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

    const oneClickHandler = (nameButton: string) => {
        props.callBack(nameButton)
    }


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

            <div style={{marginLeft: '20px'}}>
                <button onClick={() => oneClickHandler('All')}>All</button>
                <button onClick={() => oneClickHandler('Rubles')}>Rubles</button>
                <button onClick={() => oneClickHandler('Dollars')}>Dollars</button>
            </div>
        </>


    );

}

export default MoneyFilter;

