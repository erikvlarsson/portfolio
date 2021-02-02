import React, { useState } from "react";

const educations = [
  {
    school: "Lund University",
    location: "Lund, Sweden",
    description: "System Informatics",
    startYear: 2015,
    imgUrl: "https://cdn.auth0.com/blog/react-js/react.png",
  },
  {
    school: "Campus Mölndal",
    location: "Remote",
    description: "Full-Stack JavaScript",
    startYear: 2015,
    endYear: 2018,
    imgUrl:
      "https://cdn3.cdnme.se/4772502/8-3/campus-logo_58c6b2332a6b229b20cca626.png",
  },
  {
    school: "Lund University",
    location: "Lund, Sweden",
    description: "System Informatics",
    startYear: 2015,
    imgUrl: "https://cdn.auth0.com/blog/react-js/react.png",
  },
  {
    school: "Campus Mölndal",
    location: "Remote",
    description: "Full-Stack JavaScript",
    startYear: 2015,
    endYear: 2018,
    imgUrl:
      "https://cdn3.cdnme.se/4772502/8-3/campus-logo_58c6b2332a6b229b20cca626.png",
  },
];

export default function Experience() {
  const [index, setIndex] = useState(educations.length - 1);

  const education = educations[index];

  return (
    <section className="experience">
      <h1 className="gradientTextSilver">Experience</h1>
      <div className="timeline">
        <header>
          <div className="line"></div>
          {educations.map((edu, i) => {
            return (
              <div
                className={index === i ? "purpleGradient selected" : null}
                onClick={() => setIndex(i)}
              >
                <img src={edu.imgUrl} />
              </div>
            );
          })}
        </header>
        <div>
          <img src={education.imgUrl} style={{ height: 100 }} />
          <div className="experienceText">
            <p className="robotic">
              {education.startYear} ∙ {education.location}
            </p>
            <p>{education.school}</p>
            <p>{education.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
