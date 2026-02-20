import React from "react";
import "./index.css";
import NavContainer from "./components/Navbar/NavContainer";
import MainContent from "./components/MainContent/MainContent";

const App = () => {
  return (
    <div>
      <NavContainer />
      <MainContent />
    </div>
  );
};

export default App;
