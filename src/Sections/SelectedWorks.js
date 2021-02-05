import React, { useState, useRef, useEffect, useCallback } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import Wave from "../Components/Wave";

const allProjects = [
  {
    i: 0,
    name: "My first website",
    description:
      "I built my first site (and taught myself how to design and code) by reverse-engineering sites that I admired.",
    year: 2014,
    location: "Malmö, Sweden",
    imgUrl:
      "https://i.pinimg.com/originals/0d/84/c3/0d84c3f9be1fc2e07377893e80bee3a0.png",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png",
  },
  {
    i: 1,
    name: "Frontend Developer",
    description: "What I did at Arborot AB",
    year: 2020,
    location: "Malmö, Sweden",
    imgUrl:
      "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/04/2x-en.png?auto=format&q=60&fit=max&w=930",
    logoUrl: "http://www.arborot.se/arborotLogo.png",
  },
  {
    i: 2,
    name: "Consultant",
    description: "What I did at S9",
    year: 2020,
    location: "Malmö, Sweden",
    imgUrl:
      "https://www.appdesignvault.com/wp-content/uploads/2013/06/flat-ui-login-iphone-1.png",
    logoUrl:
      "https://jobtip.imgix.net/images/img_5d1f1ffb8208d.png?h=610&w=400",
  },
  {
    i: 3,
    name: "Freelance",
    description:
      "Worked as a freelance consultant in building and optimizing small company websites.",
    year: 2021,
    location: "Malmö, Sweden",
    imgUrl: "https://wallpapercave.com/wp/wp2163915.jpg",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png",
  },
  {
    i: 4,
    name: "Portfolio Designer",
    description: "Building this shit",
    year: 2021,
    location: "Malmö, Sweden",
    imgUrl:
      "https://i.pinimg.com/originals/98/d4/ca/98d4ca2ca0f81ae9dafae122427be1c3.png",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png",
  },
  {
    i: 5,
    name: "Gameboard",
    description: "Building this shit",
    year: 2021,
    location: "Malmö, Sweden",
    imgUrl:
      "https://cutewallpaper.org/21/number-6-wallpaper/Six-Wallpapers-Wallpaper-Cave.jpg",
    logoUrl:
      "http://www.napopittsburgh.org/wp-content/uploads/2018/10/ikea-logo.png",
  },
];

export default function SelectedWorks() {
  const [index, setIndex] = useState(0);
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
            let className =
              project.i === index ? "project projectActive" : "project";
            return (
              <div
                className={className}
                ref={project.i === index ? targetSlideRef : null}
                onClick={() => handleScroll(i)}
              >
                <div>
                  <img src={projects[4].imgUrl} />
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
                    <p style={{ fontSize: 12 }} id="what">
                      {project.description}
                    </p>
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
