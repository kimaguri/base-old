import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchData } from '../../app/supabase.js'
import { handleAsyncThunkStates } from '../../utils/index.js'

export const fetchSelectOptions = createAsyncThunk(
    'form/fetchSelectOptions',
    async ({ tableName }) => {
        const data = await fetchData({ tableName })

        return {
            tableName,
            data
        }
    }
)

export const formSlice = createSlice({
    name: 'formSlice',
    initialState: {
        lovs: {}
    },
    reducers: {
        // reducers
    },
    extraReducers: (builder) => {
        builder.addMatcher(handleAsyncThunkStates(fetchSelectOptions), (state, action) => {
            switch (action.type) {
                case fetchSelectOptions.fulfilled.type:
                    state.lovs = {
                        ...state.lovs,
                        [action.payload.tableName]: action.payload.data
                    }
                    break
                default:
                    break
            }
        })
    }
})

export const { actions } = formSlice

export const formReducer = formSlice.reducer
