import {createSlice} from "@reduxjs/toolkit"

const checkBox = createSlice({
    name: "checkBoxSlicer",
    initialState: {
        skills: []
    },
    reducers: {
        cbSlicer: (state, action) => {
            console.log(state)
            console.log(action)
            if(action.payload.checked){
                console.log(state)
                state.skills = [...state.skills, action.payload.value]
            }
        }
    }
})
export const {cbSlicer} = checkBox.actions
export default checkBox.reducer