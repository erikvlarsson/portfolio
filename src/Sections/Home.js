import React from "react";
import Header from "../Components/Header";

export default function Home() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* <Header /> */}
      {/* <h1>I'm Erik, a UX Designer from Malmö.</h1> */}
      <div className="textContent">
        <img
          src="http://www.jonathanpatterson.com/images/j-icon.svg"
          style={{ height: 50 }}
        />
        <h1>Hey. I'm Erik.</h1>
        <h1 className="gradientText purpleGradient">
          I craft user-friendly experiences with lean, scalable code.
        </h1>
        <div style={{ border: "5px dotted rgba(0,0,0,0.3)", padding: 5 }}></div>
        <div
          style={{
            fontSize: "8px",
            color: "rgba(255,255,255,0.5)",
            fontWeight: 300,
            letterSpacing: 0.5,
          }}
        >
          All trademarks, product names and logos in this portfolio are property
          of their respective owners.
        </div>
        {/* <h2>
          I enjoy building beautiful and user-friendly apps for web and mobile.
        </h2>
        <p>
          My job is to understand what the user wants, and have an intelligently
          coded interface to provide exactly that. As is the case with any ‘user
          experience,’ it’s all about enhancing the satisfaction of the
          consumer. To boil it down to one simple sentence, it’s about keeping
          the user interested, while providing what ever function your site
          advertises.
        </p> */}
        {/* <p>
          Delightful product design is like light traveling through a prism. The
          catalyst; raw project requirements. I filter them through my creative
          process, twisting… as ideas take shape. Turning… as core design
          principles intersect with today’s best practices. The result?
          High-fidelity UI design that performs from every angle. Take a look.
        </p> */}
      </div>
      <img src="face.png" style={{ height: 400 }} />
    </section>
  );
}
