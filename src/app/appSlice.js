import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchData } from './supabase.js'
import { handleAsyncThunkStates } from '../utils/index.js'

export const fetchDictionaries = createAsyncThunk(
    'form/fetchDictionaries',
    async () => {
        const dictionaryData = await fetchData({
            tableName: 'dictionary'
        })

        return {
            data: dictionaryData?.reduce((result, item) => ({
                ...result,
                [item.code]: item.values_json
            }), {})
        }
    }
)

export const fetchDictionaryOptions = createAsyncThunk(
    'form/fetchDictionaryOptions',
    async ({ dictionaryName }) => {
        const dictionaryData = await fetchData({
            tableName: 'dictionary',
            filter: {
                column: 'code',
                operator: 'eq',
                value: dictionaryName
            }
        })

        return {
            dictionaryName,
            data: dictionaryData?.[0]?.values_json
        }
    }
)

export const appSlice = createSlice({
    name: 'appSlice',
    initialState: {
        lovs: undefined
    },
    reducers: {
        // reducers
    },
    extraReducers: (builder) => {
        builder.addMatcher(handleAsyncThunkStates(fetchDictionaryOptions), (state, action) => {
            switch (action.type) {
                case fetchDictionaryOptions.fulfilled.type:
                    state.lovs = {
                        ...state.lovs,
                        [action.payload.dictionaryName]: action.payload.data
                    }
                    break
                default:
                    break
            }
        })
        builder.addMatcher(handleAsyncThunkStates(fetchDictionaries), (state, action) => {
            switch (action.type) {
                case fetchDictionaries.fulfilled.type:
                    state.lovs = {
                        ...state.lovs,
                        ...action.payload.data
                    }
                    break
                default:
                    break
            }
        })
    }
})

export const { actions } = appSlice

export const appReducer = appSlice.reducer
