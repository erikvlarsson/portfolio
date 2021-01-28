import React from "react";
import {
  IoIosPhonePortrait,
  IoLogoHtml5,
  IoIosImages,
  IoIosPeople,
  IoLogoJavascript,
  IoMdBuild,
  IoLogoNodejs,
  IoMdPaper,
} from "react-icons/io";

const skills = [
  {
    title: "UX Design",
    description:
      "Designing interfaces means to empathise with final users and understanding their needs through discovery process, personas, information architecture, user flows, sketches and wireframes.",
    icon: <IoIosPeople />,
  },
  {
    title: "Web Development",
    description:
      "IT background has been foundamental in understanding technical requirements for handoff and relationship with developers. In the past years I built myself several websites both on front-end and back-end.",
    icon: <IoLogoHtml5 />,
  },
  {
    title: "Mobile Development",
    description:
      "IT background has been foundamental in understanding technical requirements for handoff and relationship with developers. In the past years I built myself several websites both on front-end and back-end.",
    icon: <IoIosPhonePortrait />,
  },
  {
    title: "Graphic Design",
    description:
      "My background is based on a deep knowledge of graphic skills, perception theories and traditional medium communication such as printing processes, below the line assets and photo retouching.",
    icon: <IoIosImages />,
  },
  {
    title: "Backend Development",
    description:
      "My background is based on a deep knowledge of graphic skills, perception theories and traditional medium communication such as printing processes, below the line assets and photo retouching.",
    icon: <IoLogoNodejs />,
  },
  {
    title: "Typography",
    description:
      "I’m truly passionate about typography and I pay great attention on its choice and usage though all the projects. I also custom-design typefaces for committed projects, releasing them as open-source fonts.",
    icon: <IoMdPaper />,
  },
];

export default function Skills() {
  return (
    <section>
      <div className="textContent">
        {/* <h1 className="gradientText purpleGradient">Skills & Specialization</h1> */}
        <h1 className="gradientText purpleGradient">Skills & Specialization</h1>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          columnGap: "5%",
          rowGap: "50px",
        }}
      >
        {skills.map((skill) => {
          return (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  color: "white",
                  opacity: 0.05,
                }}
              >
                <div
                  style={{
                    fontSize: "120px",
                    position: "absolute",
                    marginRight: "-20px",
                    marginTop: "-10px",
                  }}
                >
                  {skill.icon}
                </div>
              </div>
              <h3>{skill.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontWeight: 400 }}>
                {skill.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
