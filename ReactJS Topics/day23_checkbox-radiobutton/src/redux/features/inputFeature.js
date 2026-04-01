import {createSlice} from "@reduxjs/toolkit"

const checkBox = createSlice({
    name: "checkBoxSlicer",
    initialState: {
        skills: [],
        gender: ""
    },
    reducers: {
        cbSlicer: (state, action) => {
            console.log(state)
            console.log(action)
            if(action.payload.checked){
                console.log(state)
                state.skills = [...state.skills, action.payload.value]
            }else{
                state.skills = [...state.skills.filter(ele => ele!=action.payload.value)]
            }
        },
        genderSlicer: (state, action) => {
            if(action.payload.type==="genderSelect"){
                state.gender = action.payload.value
            }
        }
    }
})
export const {cbSlicer, genderSlicer} = checkBox.actions
export default checkBox.reducer