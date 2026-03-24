import React from "react";
import { FaSpotify } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import NavigationLink from "../../Reusable_UI_Comp/NavigationLink";
import { MdOutlineDownloadForOffline } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
      <div className="leftNav">
        <FaSpotify />
        <GoHomeFill />
        <div className="searchBar">
          <FaSearch />
          <input
            type="text"
            name="searchTerm"
            id="searchTerm"
            placeholder="What do you wanna play"
          />
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            className="e-10180-icon"
            viewBox="0 0 24 24"
            height={"20px"}
            width={"20px"}
          >
            <path d="M15 15.5c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2"></path>
            <path d="M1.513 9.37A1 1 0 0 1 2.291 9h19.418a1 1 0 0 1 .979 1.208l-2.339 11a1 1 0 0 1-.978.792H4.63a1 1 0 0 1-.978-.792l-2.339-11a1 1 0 0 1 .201-.837zM3.525 11l1.913 9h13.123l1.913-9zM4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4h-2V3H6v3H4z"></path>
          </svg>
        </div>
      </div>
      <div className="rightNav">
        <NavigationLink
          linkText="Premium"
          link="https://www.spotify.com/in-en/premium/"
        />
        <NavigationLink
          linkText="Support"
          link="https://support.spotify.com/in-en/"
        />
        <NavigationLink
          linkText="Download"
          link="https://www.spotify.com/in-en/download/windows/"
        />
        <div className="separator"></div>
        <MdOutlineDownloadForOffline />
        <NavigationLink
          linkText="install App"
          link="https://www.spotify.com/in-en/premium/"
        />
        <NavigationLink linkText="Sign up" link="/signup" />
        <NavigationLink linkText="Log In" link="/login" />
      </div>
    </div>
  );
};

export default Navbar;
