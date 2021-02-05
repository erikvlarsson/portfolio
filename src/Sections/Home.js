import React from "react";
import E from "../Components/E";

export default function Home() {
  return (
    <section className="home">
      {/* <Header /> */}
      {/* <h1>I'm Erik, a UX Designer from Malmö.</h1> */}

      <div className="textContent">
        <E
          style={{
            transform: "scale(0.9)",
            marginTop: "-100px",
            marginBottom: "20px",
          }}
        />
        <h1>
          <div style={{ marginBottom: "10px" }} className="gradientTextSilver">
            Hey. I'm Erik.
          </div>
          <div className="gradientTextPurple">
            I craft user-friendly experiences with lean, scalable code.
          </div>
        </h1>
        <div
          style={{
            fontSize: "8px",
            color: "rgba(255,255,255,0.5)",
            fontWeight: 300,
            letterSpacing: 0.5,
            position: "absolute",
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
      <E
        style={{
          marginTop: "-300px",
          marginLeft: "100px",
          transform: "scale(25)",
          opacity: 0.02,
        }}
      />
    </section>
  );
}
