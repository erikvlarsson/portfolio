import React from "react";

export default function Dot({ isActive, children }) {
  let background = isActive ? "blue" : "red";
  return (
    <span
      style={{
        background: background,
        display: "inline-block",
        margin: "0.5rem",
        color: "#fff",
        padding: "0.5rem 1rem",
      }}
    >
      {children}
    </span>
  );
}
