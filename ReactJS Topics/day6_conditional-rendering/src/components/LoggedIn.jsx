export const LoggedIn = (props) => {
  console.log(props);
  return (
    <div>
      <h1>You are logged In, Now you can perform any task</h1>
      <h1>Hello {props.data}</h1>
    </div>
  );
};
