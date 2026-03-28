import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../features/features"

export const store = configureStore({
    reducer : {
        counter: counterReducer
    }
})