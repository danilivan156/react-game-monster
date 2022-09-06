import React from 'react'

type BigSliderProps = {
  title: string,
  priceMain: number,
  priceOld: number
}

const BigSlider: React.FC<BigSliderProps> = ({title,priceMain,priceOld}) => {
  return (
    <>
        <img className="desk" src="img/top-slider-right.png" alt=""/>
        <img className="mob" src="img/top-slider/Rectangle 45.png" alt=""/>
        <h2>{title}</h2>
        <div className="main-slider__price">
            <div className="main-slider__price-main">
            <div className="main-slider__price-txt">{priceMain}₽</div>
            <div className="main-slider__price-sell">-{100-(Math.round((priceMain * 100) / priceOld))}%</div>
            </div>
            <div className="main-slider__price-old">{priceOld}₽</div>
        </div>
    </>
  )
}

export default BigSlider
