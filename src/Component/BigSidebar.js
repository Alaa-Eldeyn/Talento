import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import { useSelector } from "react-redux";
import Logo from "../Component/Logo";
import NavLinks from "../Component/NavLinks";

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.user);
  return (
    <Wrapper>
      <div
        className={`sidebar-container ${isSidebarOpen ? null : "show-sidebar"}`}
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
