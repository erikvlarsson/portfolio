import React from "react";
import Home from "./Pages/Home";

export default function Content({ pageIndex }) {
  switch (pageIndex) {
    case 0:
      return <Home />;
    case 1:
      return <h1>Page 2: About</h1>;
    case 2:
      return <h1>Page 3: Projects</h1>;
    default:
      return <h1>Home</h1>;
  }
}
