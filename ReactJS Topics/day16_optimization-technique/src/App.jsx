import React from "react";
import ParentWithoutMemo from "./WithoutReactMemo/ParentWithoutMemo";
import UseMemo from "./ReactMemo/UseMemo";
import UseCallback_Hook from "./UseCallBack-Hook/UseCallback_Hook";

const App = () => {
  return (
    <div>
      {/* ===================React Memo================= */}
      {/* <ParentWithoutMemo /> */}
      {/* ===================useMemo Hook ======================= */}
      {/* <UseMemo /> */}
      {/* ===================useCallBack Hook============================ */}
      <UseCallback_Hook />
    </div>
  );
};

export default App;
