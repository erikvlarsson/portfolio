import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ReactLogo from "./ReactLogo";

export default function Footer() {
  return (
    <footer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "2px",
          }}
        >
          <ReactLogo />
        </div>
        <div style={{ fontSize: "12px" }}>
          <div>© {new Date().getFullYear()} All rights reserved.</div>
          <div style={{ color: "rgba(255,255,255,0.4)" }}>
            Designed & Coded by Erik Larsson
          </div>
        </div>
      </div>
      <div className="iconLinks">
        <div>
          <AiFillLinkedin />
        </div>
        <div>
          <AiFillFacebook />
        </div>
        <div>
          <AiFillGithub />
        </div>
      </div>
    </footer>
  );
}
