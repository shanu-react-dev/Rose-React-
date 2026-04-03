import { createSlice } from "@reduxjs/toolkit";

const cbSlicer = createSlice({
  name: "checkSlicer",
  initialState: {
    skills: [],
    gender: ""
  },
  reducers: {
    checkBoxReducer: (state, actions) => {
      console.log(state.skills);
      if (actions.payload.checked) {
        state.skills = [...state.skills, actions.payload.value];
      } else {
        state.skills = state.skills.filter((ele) => ele != actions.payload.value);
      }
    },

    genderReducer: (state, action) => {
        switch(action.payload.type){
            case "genderChange":
                state.gender = action.payload.value
        }
    }
  },
});

export const { checkBoxReducer, genderReducer } = cbSlicer.actions;
export default cbSlicer.reducer;
