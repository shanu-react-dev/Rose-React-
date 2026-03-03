import { memo } from "react";

const ChildWithoutMemo = ({ arroFruits }) => {
  console.log("Hii I am Tinku..");
  return (
    <div>
      <h1>Hii I am Child of My Appa ...</h1>
      {/* <h1>{data} is my Friend...</h1> */}
    </div>
  );
};

export default memo(ChildWithoutMemo);
