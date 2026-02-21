
import React, { useEffect } from "react";

const Alert = ({ type = "success", message, onClose, duration = 3000 }) => {
  
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => onClose(), duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const bgColor =
    type === "success"
      ? "#4caf50" // green
      : type === "error"
      ? "#f44336" // red
      : "#2196f3"; // blue 

  return (
    <div
      style={{
        position: "fixed",
        top: "30px",
        right: "20px",
        minWidth: "250px",
        padding: "12px 16px",
        borderRadius: "8px",
        backgroundColor: bgColor,
        color: "#fff",
        fontWeight: "bold",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        animation: "slideIn 0.3s ease-out",
      }}
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        style={{
          marginLeft: "12px",
          background: "transparent",
          border: "none",
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        ✕
      </button>
    </div>
  );
};

export default Alert;
