import React, { Fragment } from "react";

const ChildWithUseMemo = React.memo(({ arrayData }) => {
  console.log("I am a child Component");
  return (
    <div>
      {arrayData.map((ele, index) => {
        return (
          <Fragment key={index}>
            <h1>{ele}</h1>
          </Fragment>
        );
      })}
    </div>
  );
});

export default ChildWithUseMemo;
