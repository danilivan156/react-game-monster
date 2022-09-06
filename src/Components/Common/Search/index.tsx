import React from 'react'
import { useDispatch  } from 'react-redux'
import { setSearchValue } from '../../../redux/search/slice'
import debounce from 'lodash.debounce'

const Search: React.FC = () => {
    const [value, setValue] = React.useState('')
    const dispatch = useDispatch()
    // eslint-disable-next-line 
    const updateSearchValue = React.useCallback(
        debounce((str: string) => {
            dispatch(setSearchValue(str))
        }, 300),
        [],
    );
    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    };
    return (
        <div className="catalog-filters__search">
            <input
                value={value}
                onChange={onChangeInput}
                placeholder='Поиск среди игр'/>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.66665" cy="7.99819" r="6.66665" stroke="#F59502" strokeWidth="2" />
                <path d="M12.7773 12.4163L17 16.5562" stroke="#F59502" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </div>
    )
}

export default Search
