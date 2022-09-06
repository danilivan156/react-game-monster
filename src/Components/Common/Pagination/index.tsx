import ReactPaginate from 'react-paginate';
import style from './Pagination.module.sass'

type PaginationProps = {
  onChangePage: any,
  currentPage: number
}

const index: React.FC<PaginationProps> = ({onChangePage, currentPage}) => {
  return (
    <ReactPaginate
      className={style.pagination}
      breakLabel="..."
      nextLabel="Следующая"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={2}
      forcePage={currentPage - 1}
      previousLabel="Предыдущая"
    />
  )
}

export default index
