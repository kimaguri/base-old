import { configureStore } from '@reduxjs/toolkit'
import { formReducer } from '../components/form/formSlice.js'
import { appReducer } from './appSlice.js'

export const store = configureStore({
    reducer: {
        app: appReducer,
        form: formReducer
    }
})
