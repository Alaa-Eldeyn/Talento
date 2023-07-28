import React from "react";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {links.map((item) => {
        const { id, path, text, icon } = item;
        return (
          <NavLink
            to={path}
            key={id}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={toggleSidebar}
            end
          >
            <span className="icon"> {icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
