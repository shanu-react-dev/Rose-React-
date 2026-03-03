import React from "react";
import ParentWithoutMemo from "./WithoutReactMemo/ParentWithoutMemo";
import UseMemo from "./ReactMemo/UseMemo";

const App = () => {
  return (
    <div>
      {/* <ParentWithoutMemo /> */}
      <UseMemo />
    </div>
  );
};

export default App;
