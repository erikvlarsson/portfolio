import React, { useState } from "react";

const educations = [
  {
    school: "Lund University",
    location: "Lund, Sweden",
    description: "System Informatics",
    startYear: 2018,
    imgUrl:
      "https://lh3.googleusercontent.com/proxy/z3wfQEBipWO8ucFwXHfnv0Km-FWvDtU_geTAuqSLyFswzz0h9s5Cjt9BX6nl3dHh2Lz5_MQywyVvT3iFSk94c3UgnLUI52-qCg",
  },
  {
    school: "Campus Mölndal",
    location: "Remote",
    description: "Full-Stack JavaScript",
    startYear: 2020,
    endYear: 2020,
    imgUrl:
      "https://cdn3.cdnme.se/4772502/8-3/campus-logo_58c6b2332a6b229b20cca626.png",
  },
  {
    school: "Udemy",
    location: "Remote",
    description: "React Native",
    startYear: 2020,
    endYear: 2020,
    imgUrl:
      "https://svff.info/wp-content/uploads/2018/12/udemy-1-logo-png-transparent.png",
  },
  {
    school: "Udemy",
    location: "Remote",
    description: "Web Developer",
    startYear: 2020,
    endYear: 2020,
    imgUrl:
      "https://svff.info/wp-content/uploads/2018/12/udemy-1-logo-png-transparent.png",
  },
  {
    school: "Udemy",
    location: "Remote",
    description: "React",
    startYear: 2020,
    endYear: 2020,
    imgUrl:
      "https://svff.info/wp-content/uploads/2018/12/udemy-1-logo-png-transparent.png",
  },
];

export default function Experience() {
  const [index, setIndex] = useState(educations.length - 1);

  const education = educations[index];

  return (
    <section className="experience">
      <h2 className="gradientTextSilver">Experience</h2>
      <div className="experienceGrid">
        {educations.map((education, i) => {
          return (
            <div
              className="exp"
              style={{
                gridColumn: i === 0 ? "1/4" : null,
                gridRow: i === 0 ? "1/3" : null,
              }}
            >
              <img src={education.imgUrl} style={{ height: 100 }} />
              <div className="experienceText">
                <p className="robotic">
                  {education.startYear} ∙ {education.location}
                </p>
                <p>{education.school}</p>
                <p>{education.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
