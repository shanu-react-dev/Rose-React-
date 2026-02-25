const auth = (WrappedComp, role) => {
  const NewComponent = (prps) => {
    console.log(prps);
    if (prps.role !== role) {
      return "Please enter the valid role";
    }
    return <WrappedComp {...prps}></WrappedComp>;
  };
  return NewComponent;
};
export default auth;
