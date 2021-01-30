import React from "react";

export default function Contact() {
  return (
    <section>
      <div
        style={{
          border: "1px dotted grey",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ fontSize: 30, fontWeight: "bold" }}>
          See what happens when great projects meet great design
        </div>
        <div
          style={{
            width: 100,
            height: 1,
            background: "white",
            margin: "20px 0",
          }}
        />
        <h2>
          Whether you need a keynote speaker or a humble mentor, my inbox is
          open.
        </h2>
        <div
          class="purpleGradient"
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
        </div>
      </div>
    </section>
  );
}
