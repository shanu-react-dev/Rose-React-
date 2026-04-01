import {configureStore} from "@reduxjs/toolkit"
import reducer from "../features/inputFeature"

export const store = configureStore({
    reducer: {
        checkBoxSlicer : reducer
    }
})