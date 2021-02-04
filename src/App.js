import { useState } from "react";
import Content from "./Content";
import Header from "./Components/Header";
import LoadingScreen from "./Components/LoadingScreen";

import "./App.css";
import "./Sections.css";

import Home from "./Sections/Home";
import SelectedWorks from "./Sections/SelectedWorks";
import Experience from "./Sections/Experience";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import More from "./Sections/More";
import Contact from "./Sections/Contact";
import Footer from "./Components/Footer";

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const [isLoading, setLoading] = useState(false);

  if (isLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <div className="App">
        <Home />
        <SelectedWorks />
        <About />
        {/* <Experience /> */}
        <Skills />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
