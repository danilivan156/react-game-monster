import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import GameSlider from './Blocks/GameSlider'
import GameRelated from './Blocks/GameRelated'
import { useDispatch  } from 'react-redux'
import { addItem } from '../../redux/cart/slice'

export type GameData = {
  id: string,
  title: string,
  priceMain: number,
  priceOld: number,
  imageUrl: string,
  info: [],
  date: string,
  developer: string,
  description: string,
  categoryId: string
}

const Index: React.FC = () => {
  const [gameData, setGameData] = React.useState<GameData>()
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get<GameData>('https://6297004814e756fe3b26c094.mockapi.io/Games/' + id)
        setGameData(data)
      } catch (error) {
        alert('Ошибка при получении игры!')
        navigate('/')
      }
    }
    fetchPizza()
    // eslint-disable-next-line
  }, [id])

  const onClickAdd = () => {
    if(gameData !== undefined){
      const item = {
        id: gameData.id,
        title: gameData.title,
        price: gameData.priceMain,
        imageUrl: gameData.imageUrl,
        count: 0
      }
      dispatch(addItem(item))
    }
  }

  if (!gameData) {
    return <>'loading'</>
  }

  return (
    <div className="container card">
      <div className="card__block-top">
        <GameSlider />
        <div className="card__info">
          {<h2>{gameData.title}</h2>}
          <div className="card__subtitle">
              {gameData.info.map((value: string,index: number) => <button className="btn" key={index}>{value}</button>)}
          </div>
          <div className="card__price">
            <div className="card__price-main">{gameData.priceMain}<span>₽</span>
            </div>
            <div className="card__price-old">{gameData.priceOld}<span>₽</span>
            </div>
          </div>
          <div className="card__btns">
            <button onClick={onClickAdd} className="btn card__buy">Купить ключ</button>
            <button className="btn card__random">Выбить в рандоме</button>
          </div>
          <div className="card__description">
            <div className="card__description-item">
              <div className="card__description-left">Дата выпуска</div>
              <div className="card__description-right">{gameData.date}</div>
            </div>
            <div className="card__description-item">
              <div className="card__description-left">Разработчик</div>
              <div className="card__description-right">
                <span>{gameData.developer}</span>
              </div>
            </div>
            <div className="card__description-item">
              <div className="card__description-left">ОС</div>
              <div className="card__description-right">
                <span>Windows</span> / <span>Mac</span>
              </div>
            </div>
            <div className="card__description-item">
              <div className="card__description-left">Язык</div>
              <div className="card__description-right">русский английский</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card__block-bottom">
        <p>{gameData.description}</p>
        <div className="card__acount">
          <div className="card__header">
            <div className="card__header-left">
              <svg width="23" height="29" viewBox="0 0 23 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6366 3.8197C14.1108 3.90432 15.5528 4.27732 16.8733 4.91489C18.1516 5.52744 19.2911 6.37475 20.2284 7.41035C21.1596 8.44119 21.8676 9.61861 22.3548 10.9414C22.8396 12.263 23.0343 13.6562 22.9301 15.1148C22.8892 15.8728 22.7628 16.6068 22.5507 17.3171C22.3437 18.0178 22.0635 18.6983 21.7151 19.3466C21.1707 20.3584 20.5632 21.3153 19.8924 22.221C19.2254 23.1256 18.4976 23.9669 17.7077 24.7451C16.9167 25.5233 16.0798 26.2395 15.1883 26.8926C14.2968 27.5409 13.3644 28.1296 12.3936 28.6551L12.3477 28.6861C12.3068 28.7076 12.2597 28.7171 12.2126 28.7135C12.1345 28.6957 12.0663 28.6563 12.0154 28.5979C11.9646 28.5383 11.9373 28.4656 11.9386 28.3918C11.9386 28.3572 11.9435 28.3214 11.9534 28.2905C11.9634 28.2631 11.9795 28.238 11.9993 28.2166C12.3428 27.7482 12.6267 27.2561 12.8499 26.7448C13.0743 26.2276 13.2256 25.6901 13.3062 25.1253C13.3062 25.0871 13.2876 25.049 13.259 25.024C13.233 24.9942 13.1933 24.9787 13.1536 24.9787C12.8263 25.0168 12.499 25.0418 12.1679 25.0526C11.8381 25.0633 11.5083 25.049 11.181 25.0085C9.70676 24.9239 8.26353 24.5497 6.94306 23.9145C5.66473 23.3007 4.52652 22.4534 3.58916 21.4178C2.65429 20.381 1.93268 19.1833 1.46276 17.8868C0.974245 16.5485 0.778343 15.1291 0.886213 13.7134C0.92713 12.9554 1.0536 12.2213 1.26562 11.5111C1.47764 10.7984 1.75661 10.1346 2.10254 9.50897C2.64685 8.47933 3.25688 7.51165 3.92393 6.60594C4.59223 5.70381 5.31881 4.86127 6.10737 4.08188C6.89966 3.30488 7.73658 2.58985 8.62806 1.93679C9.52078 1.28611 10.4507 0.698591 11.4215 0.174235L11.4686 0.144442C11.5096 0.120607 11.5554 0.112265 11.6038 0.114649C11.6844 0.133716 11.7513 0.175426 11.7997 0.231437C11.853 0.292215 11.8766 0.357759 11.8766 0.438796C11.8778 0.470973 11.8728 0.506724 11.8617 0.538901C11.853 0.56631 11.8369 0.590145 11.817 0.611596C11.4786 1.0716 11.1909 1.56616 10.9652 2.08575C10.7408 2.60177 10.5933 3.14042 10.5114 3.70411C10.5114 3.74343 10.5263 3.77919 10.5561 3.80659C10.5834 3.8352 10.623 3.85069 10.6615 3.85069C10.9863 3.81136 11.3149 3.78753 11.6472 3.77799C11.9844 3.76727 12.3118 3.78157 12.6366 3.8197ZM11.636 18.5577C12.7792 18.6518 13.9149 18.2824 14.7618 17.5388C15.6545 16.7773 16.1368 15.8251 16.2199 14.6786C16.3166 13.5727 15.9322 12.4787 15.1585 11.6576C14.4134 10.8139 13.3334 10.3098 12.1828 10.2729C11.0334 10.1799 9.89522 10.5493 9.04094 11.2918C8.16186 12.0092 7.63739 13.0472 7.59772 14.1519C7.501 15.2554 7.88041 16.3471 8.64666 17.1729C9.42531 18.0369 10.4222 18.5017 11.636 18.5577Z" fill="#A6A6A6" />
              </svg>Origin аккаунт 3 игры
            </div>
            <div className="card__header-right">179 <span>₽</span>
            </div>
          </div>
          <div className="card__body">
            <div className="card__body-left">
              <Link to="#">Witcher 3: Wild Hunt </Link>
              <Link className="active" to="#">Overwatch Delux Edition</Link>
              <Link to="#">Cyberpunk 2077</Link>
            </div>
            <Link className="card__body-right" to="#">Арендовать аккаунт</Link>
          </div>
        </div>
      </div>
      <GameRelated categoryGameId={gameData.categoryId}/>
    </div>
  )
}

export default Index