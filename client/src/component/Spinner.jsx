import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import { useNavigate } from "react-router-dom";

const Spinner = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 && navigate("/");
    return () => {
      clearInterval(interval);
    };
  }, [count, navigate]);
  return (
    <div>
      <CircularProgress />
    </div>
  );
};

export default Spinner;
