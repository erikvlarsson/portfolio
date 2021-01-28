import React from "react";

export default function Experience() {
  return (
    <section>
      <h1>Experience</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "100px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: 10,
        }}
      >
        <h4>Timeline of Work</h4>
        <div
          style={{
            padding: 10,
            border: "1px solid grey",
            display: "flex",
            width: "100%",
          }}
        ></div>
        <div
          style={{
            width: "100%",
            border: "1px solid grey",
            display: "flex",
            padding: 10,
          }}
        >
          <img src="face.png" style={{ height: 100 }} />
          <div>
            <h4>2012 * MALMÖ, SWEDEN</h4>
            <h2>Arborot Ab</h2>
            <p>Designed a bit</p>
          </div>
        </div>
      </div>
    </section>
  );
}
