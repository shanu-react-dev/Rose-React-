import React from "react";
import { Link, Outlet } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="sidebar">
        <ul>
          <Link to={"/portfolio/projects"}>
            <li>See my Projects</li>
          </Link>
          <Link to={"/portfolio/contacts"}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Portfolio;
