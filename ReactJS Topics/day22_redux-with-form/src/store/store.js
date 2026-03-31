import {configureStore} from "@reduxjs/toolkit"
import formSlicer from "../Features/FormFeatures"

export const store = configureStore({
    reducer: {
        formSlice: formSlicer
    }
})