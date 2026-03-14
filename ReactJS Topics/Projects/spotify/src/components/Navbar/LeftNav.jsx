import { AiFillSpotify } from "react-icons/ai";
import { MdHomeFilled } from "react-icons/md";
import SearchBar from "../../ReusableItems/SearchBar";
import { FaSearch } from "react-icons/fa";

const LeftNav = () => {
  return (
    <div>
      <div className="logo">
        <AiFillSpotify />
      </div>
      <div className="home">
        <MdHomeFilled />
      </div>
      <div>
        <FaSearch />
        <SearchBar placeholder="What do you want to play?" />
        <svg
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          class="e-91000-icon e-91000-baseline"
          viewBox="0 0 24 24"
          height={"20px"}
        >
          <path d="M15 15.5c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2"></path>
          <path d="M1.513 9.37A1 1 0 0 1 2.291 9h19.418a1 1 0 0 1 .979 1.208l-2.339 11a1 1 0 0 1-.978.792H4.63a1 1 0 0 1-.978-.792l-2.339-11a1 1 0 0 1 .201-.837zM3.525 11l1.913 9h13.123l1.913-9zM4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4h-2V3H6v3H4z"></path>
        </svg>
      </div>
    </div>
  );
};

export default LeftNav;
