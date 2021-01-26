import React from "react";
import "../App.css";

export default function Header({ pageIndex, setPageIndex }) {
  const links = ["Home", "Work", "About", "More"];
  return (
    <header>
      <div
        style={{
          flex: 1,
          fontWeight: 600,
          fontSize: 40,
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src="http://www.jonathanpatterson.com/images/j-icon.svg"
          style={{ height: 40 }}
        />
        <div id="erikLarsson">
          <div
            // className="gradientText"
            style={{ fontWeight: 600, fontSize: 19, letterSpacing: 1.4 }}
          >
            ERIK LARSSON
          </div>
          <div
            // className="gradientText"
            style={{
              fontWeight: 400,
              fontSize: 13,
              letterSpacing: 0.4,
              paddingTop: 4,
              paddingBottom: 4,
            }}
          >
            UX Developer & Designer
          </div>
        </div>
      </div>
      {links.map((link, i) => {
        return (
          <div
            className={
              pageIndex === i
                ? "header-link header-link-active"
                : "header-link header-link-default"
            }
            onClick={() => setPageIndex(i)}
          >
            {link}
          </div>
        );
      })}
      {/* <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <a
          className="iconLink"
          target="_blank"
          href="https://www.linkedin.com/in/erikvlarsson/"
        >
          <i className="fab fa-linkedin gradientText" />
        </a>
        <a
          className="iconLink"
          target="_blank"
          href="https://github.com/erikvlarsson"
        >
          <i className="fab fa-github gradientText" />
        </a>
      </div> */}
    </header>
  );
}
