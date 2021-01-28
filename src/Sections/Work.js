import React, { useState } from "react";
import Wheel from "../Components/Wheel/Wheel";

const projects = [
  {
    name: "My first website",
    description:
      "I built my first site (and taught myself how to design and code) by reverse-engineering sites that I admired.",
    year: 2014,
    location: "Malmö, Sweden",
    imgUrl:
      "https://cdn.dribbble.com/users/1615584/screenshots/14340346/media/40e8056eda183eada80ec9ccfa70dfe4.jpg?compress=1&resize=400x300",
  },
  {
    name: "Arborot AB",
    description: "What I did at Arborot AB",
    year: 2020,
    location: "Malmö, Sweden",
    imgUrl:
      "https://scontent.fmmx1-1.fna.fbcdn.net/v/t1.0-9/10177377_752578038116102_1119014046490448366_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=1D628UHuVlAAX_eIkt6&_nc_ht=scontent.fmmx1-1.fna&oh=caaac848eae73d556b5fe989af96962b&oe=6037B3F9",
  },
  {
    name: "Strategic 9",
    description: "What I did at S9",
    year: 2020,
    location: "Malmö, Sweden",
    imgUrl:
      "https://scontent.fmmx1-1.fna.fbcdn.net/v/t1.0-9/10177377_752578038116102_1119014046490448366_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=1D628UHuVlAAX_eIkt6&_nc_ht=scontent.fmmx1-1.fna&oh=caaac848eae73d556b5fe989af96962b&oe=6037B3F9",
  },
  {
    name: "Portfolio Website",
    description: "Building this shit",
    year: 2021,
    location: "Malmö, Sweden",
    imgUrl:
      "https://cdn.dribbble.com/users/1615584/screenshots/14340346/media/40e8056eda183eada80ec9ccfa70dfe4.jpg?compress=1&resize=400x300",
  },
];
export default function Work() {
  const [index, setIndex] = useState(0);

  const changeIndex = (newIndex) => {
    const maxIndex = projects.length - 1;
    if (newIndex > maxIndex) {
      setIndex(0);
    } else if (newIndex < 0) {
      setIndex(maxIndex);
    } else {
      setIndex(newIndex);
    }
  };

  return (
    <section className="work">
      <h1>Project Timeline</h1>
      <div className="selectedProjects">
        <div className="topLayer">
          <div className="arrow" onClick={() => changeIndex(index - 1)}></div>
          <div style={{ flex: 1 }}>
            {/* <p>
              {projects[index].year} - {projects[index].location}
            </p>
            <h4>{projects[index].name}</h4>
            <p>{projects[index].description}</p> */}
          </div>
          <div className="arrow" onClick={() => changeIndex(index + 1)}></div>
        </div>
        {projects.map((project, i) => {
          let className = i === index ? "project projectActive" : "project";
          return (
            <div className={className} onClick={() => setIndex(i)}>
              <img
                src={project.imgUrl}
                style={{ height: 200, width: "100%" }}
              />
              <div id="projectDescription">
                <p
                  style={{
                    textTransform: "uppercase",
                    fontSize: 8,
                    letterSpacing: 1,
                  }}
                >
                  {project.year} ・ {project.location}
                </p>
                <h4
                  style={{
                    fontSize: 12,
                    margin: "15px 0 5px",
                  }}
                >
                  {project.name}
                </h4>
                <p
                  style={{
                    fontSize: 10,
                    margin: "0 0 15px",
                  }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="selectedProjectsFooter">
        <div>
          <div style={{ marginRight: 100 }}>
            {index + 1} / {projects.length}
          </div>
          <div style={{ display: "flex" }}>
            {projects.map((p, i) => {
              let className = i === index ? "dot active" : "dot";
              return (
                <div className={className} onClick={() => setIndex(i)}>
                  <div />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
