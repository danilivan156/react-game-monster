import {useEffect} from 'react'
import { KatalogItem, CatalogCategory, CatalogFilters, Skeleton, Pagination } from '../../Components'
import { setCurrentPage } from '../../redux/filter/slice'
import { selectFilter } from '../../redux/filter/selectors'
import { useSelector } from 'react-redux'
import { fetchGames } from '../../redux/catalog/slice'
import { selectCatalogPage } from '../../redux/catalog/selectors'
import { selectSearch } from '../../redux/search/selsectors'
import React from 'react'
import { useAppDispatch } from '../../redux/store'

const Catalog: React.FC = () => {
    const dispatch = useAppDispatch()
    const { searchValue } = useSelector(selectSearch)
    const { categoryId, sort, currentPage } = useSelector(selectFilter)
    const { games, status } = useSelector(selectCatalogPage)
    const onChangePage = (number: number) => {
        dispatch(setCurrentPage(number))
    }
    const getGames = async () => {
        const category = categoryId > 0 ? `categoryId=${categoryId}`: ''
        const search = searchValue ? `&search=${searchValue}`: ''
        const sortBy = sort.sortProperty.replace('-','')
        const order = sort.sortProperty.includes('-') ? 'acs' : 'desc'
        dispatch(fetchGames({
            category:`&${category}`,
            search,
            sortBy:`&sortBy=${sortBy}`,
            order:`&order=${order}`,
            currentPage:`page=${currentPage}`
        }))
        window.scrollTo(0, 0)
    }
    useEffect(() => {
        getGames()
        // eslint-disable-next-line
    }, [categoryId,sort.sortProperty,searchValue,currentPage])
    const gamesArray = games.map((obj: any) => <KatalogItem key={obj.id} {...obj}/>)
    const skeleton = [...new Array(12)].map((_, index) => <Skeleton key={index}/>)
    return (
        <div className="container">
            <h3 className="title-block">Каталог игр</h3>
            <CatalogCategory value={categoryId}/>
            <CatalogFilters/>
            <section className="index-katalog">
                {status === 'error'
                    ? <div>Ошибка загрузки игр</div>
                    : <div className="flex">{status === 'loading' ? skeleton : gamesArray}</div>
                }
            </section>
            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </div>
    )
}

export default Catalog
