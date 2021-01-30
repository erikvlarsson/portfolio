import React, { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const projects = [
  {
    i: 0,
    name: "My first website",
    description:
      "I built my first site (and taught myself how to design and code) by reverse-engineering sites that I admired.",
    year: 2014,
    location: "Malmö, Sweden",
    imgUrl:
      "https://c1.wallpaperflare.com/preview/702/848/843/wall-number-one-minimal.jpg",
  },
  {
    i: 1,
    name: "Arborot AB",
    description: "What I did at Arborot AB",
    year: 2020,
    location: "Malmö, Sweden",
    imgUrl: "https://wallpaperaccess.com/full/2495762.png",
  },
  {
    i: 2,
    name: "Strategic 9",
    description: "What I did at S9",
    year: 2020,
    location: "Malmö, Sweden",
    imgUrl:
      "https://thumbs.dreamstime.com/b/three-number-engraved-stone-77082667.jpg",
  },
  {
    i: 3,
    name: "Portfolio Website",
    description: "Building this shit",
    year: 2021,
    location: "Malmö, Sweden",
    imgUrl: "https://wallpapercave.com/wp/wp2163915.jpg",
  },
  {
    i: 4,
    name: "Portfolio Website",
    description: "Building this shit",
    year: 2021,
    location: "Malmö, Sweden",
    imgUrl:
      "https://thumbs.dreamstime.com/z/spring-number-five-colorful-flower-vector-illustration-template-banners-wallpaper-vintage-spring-number-five-colorful-119295360.jpg",
  },
  {
    i: 5,
    name: "Portfolio Website",
    description: "Building this shit",
    year: 2021,
    location: "Malmö, Sweden",
    imgUrl:
      "https://cutewallpaper.org/21/number-6-wallpaper/Six-Wallpapers-Wallpaper-Cave.jpg",
  },
];

export default function Work() {
  const [index, setIndex] = useState(4);
  const [selectedProjects, setSelectedProjects] = useState(
    projects.slice(2, 6)
  );

  const changeIndex = (newIndex) => {
    const maxIndex = projects.length - 1;

    let x = newIndex;
    if (newIndex > maxIndex) {
      x = 0;
    } else if (newIndex < 0) {
      x = maxIndex;
    }
    setIndex(x);

    let newArray = [];
    for (let i = -2; i < 2; i++) {
      let correctedIndex = x + i;
      if (correctedIndex < 0) {
        correctedIndex = correctedIndex + maxIndex + 1;
      } else if (correctedIndex > maxIndex) {
        correctedIndex = correctedIndex - maxIndex - 1;
      }
      newArray.push(projects[correctedIndex]);
    }
    setSelectedProjects(newArray);
  };

  return (
    <section className="work">
      <h1>Selected Works</h1>
      <div className="selectedProjects">
        <div className="topLayer">
          <div className="arrow" onClick={() => changeIndex(index - 1)}>
            <BsChevronLeft />
          </div>
          <div className="projectInfo" style={{ flex: 1 }}>
            <div style={{ maxWidth: "50%", padding: 50 }}>
              <p className="robotic">
                {projects[index].year} • {projects[index].location}
              </p>
              <h1>{projects[index].name}</h1>
              <p style={{ height: 50 }}>{projects[index].description}</p>
            </div>
          </div>
          <div className="arrow" onClick={() => changeIndex(index + 1)}>
            <BsChevronRight />
          </div>
        </div>
        <div className="carousel">
          {selectedProjects.map((project, i) => {
            let className =
              project.i === index ? "project projectActive" : "project";
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
      </div>
      <div className="selectedProjectsFooter">
        {projects.map((p, i) => {
          let className = i === index ? "dot active" : "dot";
          return (
            <div className={className} onClick={() => changeIndex(i)}>
              <div />
            </div>
          );
        })}
      </div>
    </section>
  );
}
