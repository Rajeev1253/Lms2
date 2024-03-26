import React from "react";
import { useSelector } from "react-redux";

const AdminMenu = () => {
  const user = useSelector((state) => state.auth.user.user);
  return (
    <>
      <div className="Menu" style={{ textAlign: "center" }}>
        <h4>Admin Panel</h4>
        <br />
      </div>
      <div className="details">
        <h3>Admin Name: {user?.userName}</h3>
        <h3>Admin Email: {user?.email}</h3>
      </div>
    </>
  );
};

export default AdminMenu;
