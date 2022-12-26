import React from "react";
import { NavLink } from "react-router-dom";

const IconCart = () => {
  return (
    <div className="icon-cart">
      <NavLink
        className="cart__link"
        to={"/cart"}
      >
        <div className="cart__content">
          <div className="cart__wrapper">
            <img
              className="cart__image"
              src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"
              alt=""
            />
          </div>
          <span className="cart__text">Giỏ Hàng</span>
        </div>
      </NavLink>
    </div>
  );
};

export default IconCart;
