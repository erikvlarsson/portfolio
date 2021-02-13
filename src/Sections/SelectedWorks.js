import React, { useState, useRef, useEffect, useCallback } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const allProjects = [
  {
    name: "My first website",
    description: [
      "My first interaction with code started out as a prank. I learned how to edit the html-markup and the text content of various posts on the web, which allowed for hilarious jokes among my friends.",
      "But what started out as a prank would eventually grow into a lifelong passion. Soon, I built my first websites (and taught myself how to code) by reverse-engineering sites that I admired.",
      "I incrementally learned more JavaScript and programming logic, and later picked up frameworks like React and React Native.",
    ],
    year: 2014,
    location: "Malmö, Sweden",
    imgUrl:
      "https://i.pinimg.com/originals/98/d4/ca/98d4ca2ca0f81ae9dafae122427be1c3.png",
    logoUrl: "icon.png",
  },
  {
    name: "Primal Native",
    description: [],
    year: 2019,
    location: "Malmö, Sweden",
    imgUrl:
      "https://i.pinimg.com/originals/98/d4/ca/98d4ca2ca0f81ae9dafae122427be1c3.png",
    logoUrl: "icon.png",
  },
  {
    name: "Arborot",
    description: [],
    year: 2020,
    location: "Malmö, Sweden",
    imgUrl:
      "https://i.pinimg.com/originals/98/d4/ca/98d4ca2ca0f81ae9dafae122427be1c3.png",
    logoUrl: "Arborot-logo.png",
  },
  {
    name: "Gameboard Auth",
    description: [],
    year: 2020,
    location: "Malmö, Sweden",
    imgUrl:
      "https://i.pinimg.com/originals/98/d4/ca/98d4ca2ca0f81ae9dafae122427be1c3.png",
    logoUrl: "icon.png",
  },
  {
    name: "Web Development",
    description: ["Web Development Consultancy"],
    year: 2020,
    location: "Malmö, Sweden",
    imgUrl:
      "https://i.pinimg.com/originals/98/d4/ca/98d4ca2ca0f81ae9dafae122427be1c3.png",
    logoUrl: "S9-logo.png",
  },
  {
    name: "Front-end Developer for Native Sales System",
    description: [],
    year: 2020,
    location: "Malmö, Sweden",
    imgUrl:
      "https://i.pinimg.com/originals/98/d4/ca/98d4ca2ca0f81ae9dafae122427be1c3.png",
    logoUrl: "S9-logo.png",
  },
  {
    name: "Full-Stack JavaScript Developer",
    description: [],
    year: 2021,
    location: "Malmö, Sweden",
    imgUrl:
      "https://i.pinimg.com/originals/98/d4/ca/98d4ca2ca0f81ae9dafae122427be1c3.png",
    logoUrl: "IKEAlogo.png",
  },
];

export default function SelectedWorks() {
  const [index, setIndex] = useState(5);
  const [prevIndex, setPrevIndex] = useState(null);
  const [projects, setProjects] = useState(allProjects);
  const wrapperRef = useRef(null);
  const targetSlideRef = useRef(null);

  useEffect(() => {
    const end = projects.length - 1;
    if (prevIndex !== index) {
      if (Math.abs(prevIndex - index) >= end) {
        scrollToTargetSlide("auto");
      } else {
        scrollToTargetSlide("smooth");
      }
    }
    setPrevIndex(index);
  }, [index]);

  const cleanIndex = (index) => {
    const maxIndex = allProjects.length - 1;
    let x = index;
    if (index > maxIndex) {
      x = 0;
    } else if (index < 0) {
      x = maxIndex;
    }
    return x;
  };

  const handleScroll = async (newIndex) => {
    setIndex(cleanIndex(newIndex));
  };

  const scrollToTargetSlide = useCallback(async (behavior) => {
    let { width } = wrapperRef.current.getBoundingClientRect();

    const targetSlide = targetSlideRef.current;
    const wrapper = wrapperRef.current;

    if (wrapper && targetSlide) {
      await wrapper.scrollTo({
        top: 0,
        left: index * width,
        behavior: behavior,
      });
    } else {
      return false;
    }
  });

  return (
    <section className="work">
      <div className="projects">
        <h2 className="gradientTextSilver">Featured Projects</h2>
        <div className="topLayer">
          <div className="arrow" onClick={() => handleScroll(index - 1)}>
            <BsChevronLeft />
          </div>
          <div style={{ flex: 1 }}></div>
          <div className="arrow" onClick={() => handleScroll(index + 1)}>
            <BsChevronRight />
          </div>
        </div>
        <div
          className="scrollableWrapper"
          onMomentumScrollEnd={() => alert("scrolld!")}
          ref={wrapperRef}
        >
          {projects.map((project, i) => {
            let className = i === index ? "project projectActive" : "project";
            return (
              <div
                className={className}
                ref={i === index ? targetSlideRef : null}
                onClick={() => handleScroll(i)}
              >
                <div>
                  <img src={projects[0].imgUrl} />
                  <div className="projectDescription">
                    <img
                      style={{ height: 30 }}
                      src={project.logoUrl}
                      alt={project.location}
                    />

                    <p className="robotic">
                      {project.year} ∙ {project.location}
                    </p>
                    <h3>{project.name}</h3>
                    {project.description.map((paragraph) => {
                      return <p>{paragraph}</p>;
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="selectedProjectsFooter">
          {allProjects.map((p, i) => {
            let className = i === index ? "dot active" : "dot";
            return (
              <div className={className} onClick={() => handleScroll(i)}>
                <div />
              </div>
            );
          })}
        </div>
        <div class="glass"></div>
      </div>
    </section>
  );
}
