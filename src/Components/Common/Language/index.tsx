import React from 'react'
import style from './language.module.sass'

const Index: React.FC = () => {

    const [activeIndex, setActiveIndex] = React.useState(0)
    const language = ["En","Ru"]

    return (
        <div className={style.language}>
            {
                language.map((value, index) => (
                    <button onClick={()=>setActiveIndex(index)} key={index} className={activeIndex === index ? style.active : ''}>{value}</button>
                ))
            }
        </div>
    )
}

export default Index
