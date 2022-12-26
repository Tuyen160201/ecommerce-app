import React from 'react';
import { NavLink } from "react-router-dom";
import Search from "./Search";
import { IconNavBarLogin } from "../Icons";
import IconCart from "../Icons/IconCart";
import logo from "../../../images/logo_header.png";
import "./Header.css";

const Header = () => {
  // const { userInfo } = useSelector((state) => ({ ...state.auth }));
  return (
    <header id="main-header" className="header">
      <div
        id="top-header"
        className="top-header"
      >
        <div className="bottom-header">
          <div className="left-content">
            <div className="header__logo">
            <NavLink
                  to="/"
                  className="logo__link"
                >
                  <img
                    className="logo__image"
                    src={logo}
                    alt="happy-logo"
                  />
                </NavLink>
            </div>
            <Search></Search>
          </div>
          <div className="right-content">
            <IconNavBarLogin></IconNavBarLogin>
            <IconCart></IconCart>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;