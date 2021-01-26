import React from "react";
import Spinner from "./Spinner";

export default function LoadingScreen() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "90vh",
        alignItems: "center",
      }}
    >
      <Spinner />
    </div>
  );
}
