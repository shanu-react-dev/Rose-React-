import React from "react";

const UseCallBackChild = React.memo(({ functions }) => {
  console.log("Hii This is Child Component!!");
  //   cars();

  return (
    <div>
      <h1>UseCallBack Child</h1>
    </div>
  );
});

export default UseCallBackChild;
