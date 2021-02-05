import React from "react";
import { FaGraduationCap, FaMapMarkerAlt, FaCode } from "react-icons/fa";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
export default function About() {
  return (
    <section
      className="about"
      style={{ background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.1))" }}
    >
      <div id="faceWrapper">
        <img src="face.png" />
      </div>
      <div style={{ display: "inline-block", width: "40vw", padding: "0 5vw" }}>
        <h2 className="gradientTextSilver" style={{ margin: 0 }}>
          About
        </h2>
        <p className="robotic" style={{ marginBottom: "20px" }}>
          UI / UX DESIGNER & DEVELOPER
        </p>
        <p>
          I'm a Malmö based developer with over{" "}
          {new Date().getFullYear() - 2014} years of experience in programming.
          I have worked with a variety of people, ranging from visionary
          startups to to large tech companies with ambitious goals.
          <br />
          <br />
          With an insatiable appetite for lean and efficient solutions, I love
          nothing more than the process of turning great ideas into great
          products.
          <br />
          <br />
          My job is to understand what the user wants, and have an intelligently
          coded interface to provide exactly that. To boil it down to one simple
          sentence, it’s about keeping the user interested, while providing
          whatever function your site advertises.
        </p>
        <ul>
          <li>
            <div className="purpleGradient">
              <FaMapMarkerAlt className="gradientTextSilver" />
            </div>
            Based in Malmö, Sweden
          </li>
          <li>
            <div className="purpleGradient">
              <FaGraduationCap className="gradientTextSilver" />
            </div>
            Student at Lund University
          </li>
          <li>
            <div className="purpleGradient">
              <FaCode className="gradientTextSilver" />
            </div>
            Advocate for remote work, user data privacy and the open web
          </li>
        </ul>
      </div>
    </section>
  );
}
