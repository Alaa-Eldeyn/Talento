import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { clearStore, toggleSidebar } from "../features/user/UserSlice";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => {
            dispatch(toggleSidebar());
          }}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle /> {user?.name} <FaCaretDown />
          </button>
          <div className={`dropdown ${showLogout ? "show-dropdown" : null}`}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => {
                setShowLogout(false);
                dispatch(clearStore("Logout Successful"));
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
