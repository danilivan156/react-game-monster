import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import filter from './filter/slice'
import search from './search/slice'
import cart from './cart/slice'
import catalogPage from './catalog/slice'

export const store = configureStore({
    reducer: {
        filter,
        search,
        cart,
        catalogPage,
    }
})

export type RootState = ReturnType<typeof store.getState>;
  
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();