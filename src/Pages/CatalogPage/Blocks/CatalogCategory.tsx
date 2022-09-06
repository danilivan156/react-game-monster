import { setCategoryId } from '../../../redux/filter/slice'
import { useDispatch  } from 'react-redux'
import React from 'react'

type CatalogCategoryProps = {
  value: number
}

const CatalogCategory: React.FC<CatalogCategoryProps> = React.memo(({value}) => {
  const categories = [
    {
        title: "Все",
        linkImg: "img/genre/games.jpg"
    },
    {
        title: "Экшены",
        linkImg: "img/genre/Mask Group (1).png"
    },
    {
        title: "Шутеры",
        linkImg: "img/genre/Layer 1 copy 2.png"
    },
    {
      title: "Приключения",
      linkImg: "img/genre/Mask Group.png"
    },
    {
      title: "Стратегии",
      linkImg: "img/genre/image.png"
    },
    {
      title: "Гонки",
      linkImg: "img/genre/1558604195_grid_gt_day_2.jpg"
    },
    {
      title: "Спортивные",
      linkImg: "img/genre/1-9604d38a65901baa.jpg"
    },
  ]
  const dispatch = useDispatch()
  const onChangeCategory = (id: number) => {
      dispatch(setCategoryId(id))
  }
  return (
    <section className="genre">
      {
        categories.map(
            ( obj,index ) => 
                <button onClick={()=>onChangeCategory(index)} key={index} className={value === index ? 'active' : ''}>
                  <img src={obj.linkImg} alt=""/>
                  <div className="genre__title">{obj.title}</div>
                </button>
        )
      }
    </section>
  )
})

export default CatalogCategory
