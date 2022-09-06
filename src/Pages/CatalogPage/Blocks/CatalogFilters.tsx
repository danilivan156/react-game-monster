import React from 'react'
import Search from '../../../Components/Common/Search'
import { useSelector, useDispatch  } from 'react-redux'
import { setSort } from '../../../redux/filter/slice'
import { sortPropertyEnum } from '../../../redux/filter/types'
import { selectFilter } from '../../../redux/filter/selectors'

type FiltersItem = {
  name: string,
  sortProperty: sortPropertyEnum
}

export const sortList: FiltersItem[] = [
  {name: 'Популярность Desk', sortProperty: sortPropertyEnum.RATING_DESC}, 
  {name: 'Популярность Asc', sortProperty: sortPropertyEnum.RATING_ASC}, 
  {name: 'Цена Desk', sortProperty: sortPropertyEnum.PRICE_DESC}, 
  {name: 'Цена Asc', sortProperty: sortPropertyEnum.PRICE_ASC}
]

const CatalogFilters = () => {
  const dispatch = useDispatch()
  const { sort } = useSelector(selectFilter)
  const [openSort, setOpenSort] = React.useState(false)
  const sortRef = React.useRef<HTMLDivElement>(null)
  const onClickListSort= (obj: FiltersItem) => {
    dispatch(setSort(obj))
    setOpenSort(false)
  }

  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if(!event.path.includes(sortRef.current)){
        setOpenSort(false)
      }
    }
    document.body.addEventListener('click', handleClickOutside)
    return () => document.body.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <section className="catalog-filters">
        <div className="catalog-filters__item">
          <div ref={sortRef} className="catalog-filters__popular">
            <input type="checkbox" id="catalog-filters__popular"/>
            <label htmlFor="catalog-filters__popular">Сортировать по:<span onClick={() => setOpenSort(!openSort)}>{sort.name}</span><svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L4 4L7 1" stroke="#C4C4C4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </label>
            {
              openSort && (
                <div className="modal-popular">
                  <ul>
                    {
                      sortList.map((obj, i)=>(
                        <li onClick={() => onClickListSort(obj)} key={i} className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>{obj.name}</li>
                      ))
                    }
                  </ul>
                </div>
              )
            }
          </div>
        </div>
        <Search/>
    </section>
  )
}

export default CatalogFilters
