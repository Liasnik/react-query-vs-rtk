import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../api";

export const fetchCats = createAsyncThunk(
    "https://catfact.ninja/fact",
    async (name) => {
        const response = await fetchData("https://catfact.ninja/fact")
        console.log(response)
        return response.data

        // обработку часто пишут так:
        // if (response.status > 400) {
        //     console.log('ERROR')
        // }
        // с большими данными обычно пишут:
        // const formattedData = formattingFunc(response)
        // return formattedData
    }
)

const catsSlice = createSlice({
    name: 'cats',
    initialState: {
        value: 0,
        // catsData: null, // так раньше ошибка вылезет в компоненте пока придут данные! 
        // catsData: {fact: ''},
        catsData: {},
        isLoading: false,
        error: null,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCats.fulfilled, (state, action) => {
            state.isLoading = false
            state.catsData = action.payload
            console.log(action.payload)
        })
        builder.addCase(fetchCats.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchCats.rejected, (state) => {
            state.error = 'ERROR'
            state.isLoading = false
        })
    }
})

export const { increment, decrement } = catsSlice.actions

export default catsSlice.reducer