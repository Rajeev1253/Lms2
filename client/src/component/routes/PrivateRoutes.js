import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const token = useSelector((state) => state.auth.user.token);
  console.log(token);
  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("http://localhost:8000/auth/user-auth", {
        headers: {
          Authorization: token,
        },
      });
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (token) authCheck();
  }, [token]);
  return ok ? <Outlet /> : <Spinner />;
}
