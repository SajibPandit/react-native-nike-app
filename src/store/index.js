import {configureStore} from '@reduxjs/toolkit'
import { cartSlice } from './cartSlice'
import { productSlice } from './ProductSlice'

const store = configureStore({
    reducer:{
        products : productSlice.reducer,
        cart : cartSlice.reducer
    }
})

export default store