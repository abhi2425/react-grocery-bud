import React, { useEffect } from "react";
import "./Alert.css";
const Alert = ({ message, className, removeAlert }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      removeAlert();
    }, 2000);
    return () => clearInterval(interval);
  });
  return <div className={`alert ${className}`}>{message}</div>;
};
export default Alert;
