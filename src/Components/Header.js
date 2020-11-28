import React from "react";
import ReactLogo from "../Components/ReactLogo";
import "../App.css";
import { ImLinkedin, ImGithub } from "react-icons/im";

export default function Header({ pageIndex, setPageIndex }) {
  const links = ["About", "Testimonial", "Services", "Projects", "Contact"];
  return (
    <div className="header">
      <div
        style={{
          flex: 1,
          fontWeight: 600,
          fontSize: 40,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <ReactLogo />
        </div>
        <div id="erikLarsson">
          <div className="gradientText">erik</div>
          <div className="gradientText">larsson</div>
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
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {/* <div className="gradient">
          <ImLinkedin className="gradientIcon" id="linkedinLink" />
        </div>
        <a className="iconLink" href="/">
          <ImGithub id="gradientIcon" className="fa-github" />
        </a> */}
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
      </div>
    </div>
  );
}
