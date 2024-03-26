import React from "react";
import { NavLink } from "react-router-dom";

const Usermenu = () => {
  return (
    <>
      <div className="Menu" style={{ textAlign: "center" }}>
        <h4>user Panel</h4>
        <NavLink
          to="/dashboard/user/profile"
          style={{ display: "flex", flexDirection: "column" }}
        >
          UserProfile
        </NavLink>
        <NavLink to="/dashboard/user/order">Orders</NavLink>
        <br />
        <h1>HELLLLLLLLLLLL</h1>
      </div>
      <div className="user_details"></div>
    </>
  );
};

export default Usermenu;
