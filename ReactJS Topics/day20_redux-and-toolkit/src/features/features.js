import {createSlice} from "@reduxjs/toolkit"

let initialState = {
    count: 0
}
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers : {
        increment: (state) => {
            state.count+=1
        },
        decrement: (state) => {
            state.count -= 1
        }
    }
})

export let {increment, decrement} = counterSlice.actions
export default counterSlice.reducer 