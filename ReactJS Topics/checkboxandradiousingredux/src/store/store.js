import {configureStore} from "@reduxjs/toolkit"
import cbReducer from "../features/cbReducer"

export let store = configureStore({
    reducer:{
        checkSlicer: cbReducer
    }
})
