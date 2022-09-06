import React from 'react'
import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
  return (
    <>
      <div className="page-other__bg">
        <img src="img/image 6.png" alt=""/>
      </div>
      <div className="container page-other page-error">
        <h1 className="page-error__title">Похоже, такой страницы нет</h1>
        <Link className="btn" to="/">Вернуться на главную</Link>
      </div>
    </>
  )
}

export default NotFound
