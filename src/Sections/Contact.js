import React from "react";

export default function Contact() {
  return (
    <section className="contact">
      <h1 className="gradientTextSilver">Contact</h1>
      <div
        style={{
          width: 100,
          height: 1,
          background: "white",
          margin: "20px 0",
        }}
      />
      <div style={{ fontSize: 24 }}>
        Whether you are looking to collaborate or need a fresh set of eyes to
        your project, my inbox is open.
      </div>
      <a
        target="_blank"
        href="http://www.google.com"
        className="purpleGradient"
        style={{
          padding: "5px",
          display: "flex",
          borderRadius: 25,
          boxShadow:
            "inset 0 0 2px rgba(255,255,255,0.2), 0 5px 5px -3px black",
        }}
      >
        <div
          style={{
            background: "#191a1b",
            height: "100%",
            padding: "10px 30px",
            borderRadius: 20,
            boxShadow: "0 0 2px rgba(255,255,255,0.1), inset 0 0 4px black",
          }}
        >
          <h2 style={{ margin: 0 }}>erikvlarsson1@gmail.com</h2>
        </div>
      </a>
    </section>
  );
}
