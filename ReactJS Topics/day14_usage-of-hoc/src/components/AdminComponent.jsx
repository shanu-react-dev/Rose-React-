const AdminComponent = (props) => {
  console.log(props);
  return (
    <div>
      <h1>This is Admin Component</h1>
      <h1>{props.data.userName}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
        eligendi! Animi unde quas dolorum porro suscipit dolor facere ratione
        illo a, doloribus ut quibusdam. Repellendus nobis, exercitationem porro
        praesentium odit nemo ut ipsa sed? Laudantium dicta sequi molestiae
        consequuntur eaque.🥰🥰🥰
      </p>
      <h1>Current Role is: {props.role}</h1>
    </div>
  );
};

export default AdminComponent;
