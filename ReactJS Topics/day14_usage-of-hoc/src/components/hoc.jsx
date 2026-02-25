const hoc = (WrappedComponent, role) => {
  const NewComponent = (props) => {
    if (props.role !== role) {
      return "Access Denied";
    }
    return (
      <WrappedComponent
        {...props}
        data={{ userName: "Shanu", age: 21 }}
      ></WrappedComponent>
    );
  };
  return NewComponent;
};
export default hoc;
