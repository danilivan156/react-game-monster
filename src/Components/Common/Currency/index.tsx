import React from 'react'
import style from './currency.module.sass'

const Index: React.FC = () => {

    const [activeIndex, setActiveIndex] = React.useState(0)
    const currency = ["$","€","₽"]

    return (
        <div className={style.currency}>
            {
                currency.map((value, index) => (
                    <button onClick={()=>setActiveIndex(index)} key={index} className={activeIndex === index ? style.active : ''}>{value}</button>
                ))
            }
        </div>
    )
}

export default Index
