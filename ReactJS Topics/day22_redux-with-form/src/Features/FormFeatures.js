import {createSlice} from "@reduxjs/toolkit"

const FormFeatures = createSlice(
    {
        name: "formSlice",
        initialState : {
            username: "",
            password: ""
        },
        reducers: {
            updateUserData: (state, action) => {
                return state = {...state, [action.payload.name] : action.payload.value}
                // console.log(state)
            }
        }
    }
)

export const {updateUserData} = FormFeatures.actions

export default FormFeatures.reducer