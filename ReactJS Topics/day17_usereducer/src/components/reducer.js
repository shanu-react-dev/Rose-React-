export function reducer(data, action) {
  //   console.log("I am reducer function");
  //   console.log(data);
  console.log(action);
  switch (action.action) {
    case "increment":
      return (data = data + 1);
    case "decrement":
      return (data = data - 1);
    case "reset":
      return (data = 0);
    default:
      return (data = "Unspecified");
  }
}
