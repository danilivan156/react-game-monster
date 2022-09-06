import React from 'react'
import TitleRow from '../Common/TitlteRow'

const NewsVariantOne: React.FC = () => {
  return (
    <section className="index-news">
        <TitleRow mainTitle="Игровые новости" buttonTitle="Все материалы" buttonUrl="#"/>
        <div className="news">
          <div className="news-left">
            <div className="news__item news-1" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="400">
              <img className="news__img-stock" src="img/news/CFPH0vifuk.png" alt=""/>
              <div className="news__txt">
                <button className="news__title">The Division раздают бесплатно</button>
                <div className="news__category">Скидки и акции</div>
              </div>
            </div>
            <div className="news__item news-2" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="700">
              <img className="news__img-stock" src="img/news/s-l1600.jpg" alt=""/>
              <div className="news__txt">
                <button className="news__title">Apple готовит не только свои процессоры, но и видеокарты</button>
                <div className="news__category">Технологии</div>
              </div>
            </div>
            <div className="news__item news-3" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
              <img className="news__img-stock" src="img/news/r_M5y7I93s.jpg" alt=""/>
              <div className="news__txt">
                <button className="news__title">Microsoft Flight Simulator. Дорога в небо открыта каждому</button>
                <div className="news__category">Симуляторы</div>
              </div>
            </div>
            <div className="news__item news-4" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1300">
              <img className="news__img-stock" src="img/news/2.jpg" alt=""/>
              <div className="news__txt">
                <button className="news__title">Выбор редации: лучшие игры о космосе</button>
                <div className="news__category">Подборки</div>
              </div>
            </div>
          </div>
          <div className="news-right">
            <div className="news__item news__mobile" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1600">
              <img className="news__img-stock" src="img/news/5143934543e17c4d98df603e308d1990-12-scaled.jpg" alt=""/>
              <div className="news__icons">
                <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.75841 6.67662C8.86235 6.67662 7.4753 5.64911 6.01461 5.68625C4.08747 5.71101 2.31991 6.8128 1.32566 8.55833C-0.675127 12.0618 0.810117 17.2365 2.7618 20.0838C3.71923 21.4703 4.84851 23.0301 6.34603 22.9806C7.78217 22.9187 8.32226 22.0398 10.0653 22.0398C11.796 22.0398 12.287 22.9806 13.8091 22.9435C15.3557 22.9187 16.3377 21.5322 17.2828 20.1333C18.3753 18.524 18.8294 16.9641 18.854 16.8775C18.8172 16.8651 15.8467 15.7138 15.8099 12.2475C15.7853 9.35063 18.1543 7.96411 18.2648 7.90221C16.9146 5.90908 14.8401 5.68625 14.1159 5.63673C12.2256 5.48818 10.6422 6.67662 9.75841 6.67662ZM12.9498 3.75502C13.7477 2.78941 14.2755 1.44003 14.1282 0.103027C12.9867 0.152546 11.6119 0.870565 10.7895 1.83618C10.053 2.69037 9.41471 4.06452 9.58656 5.37676C10.8509 5.4758 12.152 4.72064 12.9498 3.75502Z" fill="white" fillOpacity="0.3" />
                </svg>
                <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.69681 20.3956C1.77891 20.3636 1.86506 20.3233 1.95389 20.2732L13.7516 13.596L10.956 10.7083L1.69681 20.3956ZM14.2752 13.301L11.3571 10.288L14.2725 7.2375L18.2863 9.50173C19.2757 10.0598 18.7696 10.757 18.2863 11.0298L14.2752 13.301ZM13.7503 6.94386L1.95524 0.290338C1.82871 0.219363 1.68604 0.176222 1.54336 0.156738L10.9533 9.87191L13.7503 6.94386ZM0.851513 0.276421L10.5522 10.2908L0.897278 20.3929C0.615962 20.2078 0.463863 19.807 0.462517 19.2893C0.457133 18.297 0.380411 2.54204 0.375027 1.36052C0.372335 0.792726 0.571544 0.447595 0.851513 0.276421Z" fill="white" fillOpacity="0.3" />
                </svg>
              </div>
              <div className="news__txt">
                <button className="news__title">Релиз мобильного приложения по игре Ведьмак 3</button>
                <div className="news__category">Mobile</div>
              </div>
            </div>
            <div className="news__smalls">
              <div className="news__small" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1900">
                <img src="img/news/Rectangle 32.png" alt=""/>
                <div className="news__txt">
                  <button className="news__title">В Gotham Knights по улицам будут ходить мирные жители со своим распорядком дня</button>
                  <div className="news__category">RPG</div>
                </div>
              </div>
              <div className="news__small" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="2200">
                <img src="img/news/Rectangle 32 (1).png" alt=""/>
                <div className="news__txt">
                  <button className="news__title">В Gotham Knights по улицам будут ходить мирные жители со своим распорядком дня</button>
                  <div className="news__category">RPG</div>
                </div>
              </div>
              <div className="news__small" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="2500">
                <img src="img/news/Rectangle 32.png" alt=""/>
                <div className="news__txt">
                  <button className="news__title">В Gotham Knights по улицам будут ходить мирные жители со своим распорядком дня</button>
                  <div className="news__category">RPG</div>
                </div>
              </div>
            </div>
            <div className="news__video" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="2800">
              <img src="img/news/Rectangle 32 (2).png" alt=""/>
              <div className="news__video-txt">
                <p>Показан геймплей The Witcher: Monster Slayer</p>
                <button>Смотреть видео</button>
              </div>
            </div>
          </div>
        </div>
        <div className="news-row">
          <button>Онлайн-шоу с анонсами по Minecraft стартует 3 октября</button>
          <button>Второй сезон Fallout 76 начнётся 15 сентября</button>
          <button>Warface скоро появится в Steam</button>
          <button>Релиз PC-версии Spelunky 2 состоится 29 сентября</button>
          <button>Анонсирована The Witcher: Monster Slayer — мобильная игра по «Ведьмаку»</button>
        </div>
      </section>
  )
}

export default NewsVariantOne
