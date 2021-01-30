import React, { useState, useRef, useEffect } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const allProjects = [
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

export default function SelectedWorks() {
  const [index, setIndex] = useState(4);
  const [projects, setProjects] = useState(allProjects);
  const wrapperRef = useRef(null);
  const targetSlideRef = useRef(null);

  const cleanIndex = (index) => {
    const maxIndex = allProjects.length - 1;
    let x = index;
    if (index > maxIndex) {
      x = 0;
    } else if (index < 0) {
      // -1 = maxIndex
      // -2 = maxIndex - 1
      // -3 = maxIndex - 2
      x = 1 + maxIndex + index;
    }
    return x;
  };

  const handleScroll = async (newIndex) => {
    const projectsCopy = [...projects];

    // make sure there are at least two left of target and one to the right
    const start = projects[0].i;
    const end = projects[projects.length - 1].i;

    // if reaching end
    if (newIndex >= end) {
      // await scrollToTargetSlide("auto");
      projectsCopy.push(allProjects[cleanIndex(end + 1)]);
      setProjects(projectsCopy);
      await setIndex(cleanIndex(newIndex));
      const didScroll = await scrollToTargetSlide("smooth");
      // alert(didScroll);
    }
    // if going left
    // else if (newIndex <= start) {
    //   projectsCopy.unshift(allProjects[cleanIndex(start - 1)]);
    //   projectsCopy.pop();
    // }
    // scrollToTargetSlide("auto");

    // scroll silently

    // projectsCopy.push(allProjects[cleanIndex(lastIndex + 1)]);
    // projectsCopy.unshift(allProjects[cleanIndex(firstIndex - 1)]);
  };

  const scrollToTargetSlide = async (behavior) => {
    let { width } = wrapperRef.current.getBoundingClientRect();

    const targetSlide = targetSlideRef.current;
    const wrapper = wrapperRef.current;

    if (wrapper && targetSlide) {
      await wrapper.scrollTo({
        top: 0,
        left: targetSlide.offsetLeft - width / 2,
        behavior: behavior,
      });
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    // alert("yes!");
  });

  return (
    <section className="work">
      <h1>Selected Works — {index}</h1>
      <h1>{JSON.stringify(projects.map((p) => p.i))}</h1>
      <div className="selectedProjects">
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
          // onScroll={handleScroll}
          onMomentumScrollEnd={() => alert("scroleld!")}
          ref={wrapperRef}
        >
          <div
            style={{
              height: "100px",
              width: "100vw",
              border: "4px solid red",
              display: "inline-block",
            }}
          ></div>
          {projects.map((project, i) => {
            let className =
              project.i === index ? "project projectActive" : "project";
            return (
              <div
                className={className}
                ref={project.i === index ? targetSlideRef : null}
                onClick={() => handleScroll(i)}
              >
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
          <div
            style={{
              height: "100px",
              width: "100vw",
              border: "4px solid red",
              display: "inline-block",
            }}
          ></div>
        </div>
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
    </section>
  );
}
