const formReducer = (state, action) => {
  //   console.log("I am Form Reducer");
  //   console.log(action);
  //   console.log(state);

  switch (action.type) {
    case "dataChange":
      console.log(state);
      return (state = { ...state, [action.name]: action.value });
    default:
      return state;
  }
};

export default formReducer;
