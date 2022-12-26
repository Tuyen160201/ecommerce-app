import React from "react";
import { NavLink } from "react-router-dom";
import { IconUser } from "../Icons";

const IconNavBarLogin = () => {
  return (
    <div className="icon-login">
      <IconUser></IconUser>
      <span className="login__container">
        <span className="login__content">
          {" "}
          <NavLink className="login__link" to="/sign-in">Đăng nhập</NavLink> /{" "}
          <NavLink className="login__link" to="sign-up">Đăng ký</NavLink>
        </span>
        <span className="login__account">Tài khoản</span>
      </span>
    </div>
  );
};

export default IconNavBarLogin;
