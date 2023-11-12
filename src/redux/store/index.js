import { configureStore } from "@reduxjs/toolkit";
import catsReducer from "../slices/catsSlice"

export default configureStore( {
    reducer: {
        catsReducer
    },
    // To allow non-serializable values(Чтобы разрешить несериализуемые значения)
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: false,
    })
})