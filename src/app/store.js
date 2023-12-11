import { configureStore } from '@reduxjs/toolkit'
import { formReducer } from '../components/form/formSlice.js'

export const store = configureStore({
    reducer: {
        form: formReducer
    }
})
