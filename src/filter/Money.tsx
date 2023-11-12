import {useState} from "react";

type FilterType = "all"| "Dollars" |"RUBLS"

export const Money = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let[filter, setFilter] = useState<FilterType>("all")



    let currentMoney = money
    if (filter === 'RUBLS') {
       currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
    } else if (filter === 'Dollars'){currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }

    const onClickFilterHandler = (nameBtn: FilterType) => {
        setFilter(nameBtn)
    }

    return (


        <>
            <ul>
                {currentMoney.map((el, index) => {
                    return (
                        <li key={index}>
                            <span>{el.banknots}</span>
                            <span>{el.value}</span>
                            <span>{el.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler("all")}>all</button>
                <button onClick={() => onClickFilterHandler("RUBLS")}>RUBLS</button>
                <button onClick={() => onClickFilterHandler("Dollars")}>Dollars</button>
            </div>
        </>

    )
}