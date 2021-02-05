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
          Erik is a social and likable person. He is curious and energetic, and
          with a high motivation to learn, he rarely turns down a new challenge.
          <br />
          <br />
          With an insatiable appetite for efficient code, I love nothing more
          than lean and optimized solutions — which is an approach I adopt to
          all of my projects.
          <br />
          <br />
          Erik has a background in System Informatics, but at his core he is a
          self-taught programmer. With his main focus on UX, he remains
          analytical throughout the development process; always with the end
          user in mind.
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
