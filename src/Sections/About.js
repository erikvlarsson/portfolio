import React from "react";
import { FaGraduationCap, FaMapMarkerAlt, FaCode } from "react-icons/fa";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
export default function About() {
  return (
    <section
      className="about"
      style={{ background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.1))" }}
    >
      <div id="iconLinks">
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
      <img src="face.png" style={{ width: "35vw" }} />
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
          With an insatiable appetite for efficient code, Erik loves nothing
          more than lean and optimized solutions — which is an approach he
          adopts to all of his projects.
          <br />
          <br />
          Erik has a background in System Informatics, but at his core he is a
          self-taught programmer. With his main focus on UX, he remains
          analytical throughout the development process; always with the end
          user in mind.
        </p>
        <ul>
          <li>
            <div>
              <FaMapMarkerAlt className="gradientTextSilver" />
            </div>
            Based in Malmö, Sweden
          </li>
          <li>
            <div>
              <FaGraduationCap className="gradientTextSilver" />
            </div>
            Student at Lund University
          </li>
          <li>
            <div>
              <FaCode className="gradientTextSilver" />
            </div>
            Advocate for remote work, user data privacy and the open web
          </li>
        </ul>
      </div>
    </section>
  );
}
