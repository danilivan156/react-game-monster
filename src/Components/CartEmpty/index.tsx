import React from 'react'
import style from './CartEmpty.module.sass'
import { Link } from "react-router-dom";

const index: React.FC = () => {
  return (
    <div className="container">
        <div className={style.cart}>
            <h2>Корзина пустая</h2>
            <p>
                Вероятней всего, вы не заказывали ещё игру.<br />
                Для того, чтобы заказать игру, перейди на главную страницу.
            </p>
            <img src="../img/empty-cart.png" alt="Empty cart" />
            <Link to="/" className={style.btn}>
                <span>Вернуться назад</span>
            </Link>
        </div>
    </div>
  )
}

export default index
