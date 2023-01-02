import { configureStore } from '@reduxjs/toolkit'
import shopReducer from '../../scenes/_slice/shop.slice'

export const store = configureStore({
    reducer: {
        shop: shopReducer,
    },
})
