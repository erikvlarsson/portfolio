import { useState } from "react";
import Content from "./Content";
import Header from "./Components/Header";
import Spinner from "./Components/Spinner";
import "./App.css";

function App() {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <div className="App">
      <Header pageIndex={pageIndex} setPageIndex={setPageIndex} />
      {/* <MobileHeader pageIndex={pageIndex} setPageIndex={setPageIndex} /> */}
      <Content pageIndex={pageIndex} />
      <Spinner />
    </div>
  );
}

export default App;
