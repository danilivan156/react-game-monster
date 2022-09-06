function Bonuses() {
  return (
    <section className="bonuses">
        <div className="bonuses__referals">
          <img className="bonuses__stock" src="img/bonuses/Mask Group (2).png" alt=""/>
          <img className="bonuses__absolute" src="img/bonuses/Mask Group.png" alt=""/>
          <img className="bonuses__mobile" src="img/bonuses/mob (2).png" alt=""/>
          <div className="bonuses__title">Система рефералов</div>
          <div className="bonuses__desk">Приглашайте друзей и получайте бонусы</div>
          <button className="btn">Подробнее</button>
        </div>
        <div className="bonuses__discounts">
          <img className="bonuses__stock" src="img/bonuses/Mask Group (3).png" alt=""/>
          <img className="bonuses__absolute" src="img/bonuses/Mask Group (1).png" alt=""/>
          <img className="bonuses__mobile" src="img/bonuses/mob (1).png" alt=""/>
          <div className="bonuses__title">Уникальные скидки и бонусы</div>
          <div className="bonuses__desk">При подписке на новости сервиса</div>
          <div className="flex">
            <input type="text" placeholder="E-mail"/>
            <button className="btn">Подписаться</button>
          </div>
        </div>
        <div className="bonuses__questions">
          <img className="bonuses__stock" src="img/bonuses/Mask Group (4).png" alt=""/>
          <img className="bonuses__absolute" src="img/bonuses/image 4.png" alt=""/>
          <img className="bonuses__mobile" src="img/bonuses/Rectangle 40.png" alt=""/>
          <div className="bonuses__title">Остались вопросы?</div>
          <form action="">
            <button className="btn">Отправить</button>
            <div className="bonuses__form">
              <input type="text" placeholder="E-mail"/>
              <textarea/>
            </div>
          </form>
        </div>
      </section>
  )
}

export default Bonuses
