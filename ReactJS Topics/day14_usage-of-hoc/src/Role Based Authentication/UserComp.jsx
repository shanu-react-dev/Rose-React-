import React from "react";

const UserComp = ({ role }) => {
  return (
    <div>
      <h1>This is User Component</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
        voluptate molestiae officia porro id doloribus perspiciatis fuga totam,
        neque minima. Praesentium maxime ut velit consectetur dolore commodi a
        nulla. Nulla.
      </p>
      <h1>Current Role: {role}</h1>
    </div>
  );
};

export default UserComp;
