export function Reducer(state, action) {
  console.log(state);
  console.log(action.type);
  switch (action.type) {
    case "updateUser":
      return { ...state, [action.name]: action.value };
    case "reset":
      return (state = action.initialData);
    default:
      return state;
  }
}
