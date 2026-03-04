import ThemeContext from "./ThemeContext";
import ChildComp from "./ChildComp";
import Dd from "./Dd";

const App = () => {
  return (
    <div>
      <ThemeContext>
        <ChildComp />
        <Dd />
      </ThemeContext>
    </div>
  );
};

export default App;
