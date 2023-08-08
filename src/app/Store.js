import { configureStore } from '@reduxjs/toolkit'
import reducer from './counterSlice/reducer'

export const store = configureStore({
    reducer: {
        counter: reducer
    },
})