import Logo from "./Logo";
import Navlists from "./Navlists";
import Buttons from "./Buttons";

const NavContainer = () => {
  return (
    <div className="navbar">
      <Logo />
      <Navlists />
      <Buttons />
    </div>
  );
};

export default NavContainer;
