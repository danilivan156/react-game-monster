import { useNavigate } from 'react-router-dom';
import React from 'react'

type FortuneItemProps = {
    id: string,
    title: string,
    mainImageUrl: string,
    absolutImageClass: string,
    absolutImageUrl: string,
    titleClass: string,
    priceMain: number,
    priceOld: number
}

const FortuneItem: React.FC<FortuneItemProps> = ({id,title,mainImageUrl,absolutImageClass,absolutImageUrl,titleClass,priceMain,priceOld}) => {
    const router = useNavigate()
    const onChangeSlug = (id: string) => {
        router(`/case/${id}`)
    }
    return (
        <div className="fortune__item" onClick={() => onChangeSlug(id)}>
            <img className="fortune__img" src={mainImageUrl} alt=""/>
            <img className={absolutImageClass} src={absolutImageUrl} alt=""/>
            <div className={titleClass}>{title}</div>
            <div className="fortune__desc">
                <div className="fortune__desc-item">
                    <span>2</span> игры
                </div>
                <div className="fortune__desc-item">
                    <span>{Math.round((85 / priceMain) * 100)}%</span> max профит
                </div>
                <div className="fortune__desc-item">игры от <span>$ 15</span></div>
            </div>
            <div className="fortune__discount">-{100-(Math.round((priceMain * 100) / priceOld))}%</div>
            <div className="fortune__price">
                <div className="fortune__price-main">$ {priceMain}</div>
                <div className="fortune__price-old">$ {priceOld}</div>
            </div>
        </div>
    )
}

export default FortuneItem
