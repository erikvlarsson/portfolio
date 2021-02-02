import React from "react";
import Home from "./Sections/Home";
import SelectedWorks from "./Sections/SelectedWorks";
import About from "./Sections/About";
import More from "./Sections/More";

export default function Content({ pageIndex }) {
  switch (pageIndex) {
    case 0:
      return <Home />;
    case 1:
      return <SelectedWorks />;
    case 2:
      return <About />;
    case 3:
      return <More />;
    default:
      return <Home />;
  }
}
