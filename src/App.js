import { useState } from "react";
import Content from "./Content";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ContactFooter from "./Components/ContactFooter";
import LoadingScreen from "./Components/LoadingScreen";
import "./App.css";
import Home from "./Sections/Home";
import Work from "./Sections/Work";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import More from "./Sections/More";

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const [isLoading, setLoading] = useState(false);

  if (isLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <div className="App">
        {/* <MobileHeader pageIndex={pageIndex} setPageIndex={setPageIndex} /> */}
        {/* <Header pageIndex={pageIndex} setPageIndex={setPageIndex} /> */}
        {/* <Content pageIndex={pageIndex} /> */}
        {/* <Spinner /> */}
        <Home />
        <Work />
        <About />
        <Skills />
        <More />
        <ContactFooter />
        <Footer />
      </div>
    );
  }
}

export default App;
