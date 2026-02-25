import React from "react";

const UserComponent = (props) => {
  console.log(props);
  return (
    <div>
      <h1>This is user Component</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima optio
        minus illo totam ipsam eaque, consequuntur incidunt repudiandae tempora
        maxime nemo quibusdam quas temporibus voluptatibus nesciunt voluptatem
        neque quo sit?
      </p>
      <pre>🤣🤣🤣</pre>
      <h1>Current Role is: {props.role}</h1>
    </div>
  );
};

export default UserComponent;
