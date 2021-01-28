import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Wheel.css";
import useIdle from "./useIdle";
import Dot from "./Dot";

const Wheel = ({ projects }) => {
  const [visibleSlide, setVisibleSlide] = useState(0);
  const [targetSlide, setTargetSlide] = useState(0);
  const wrapperRef = useRef(null);
  const targetSlideRef = useRef(null);

  const scrollToTargetSlide = useCallback(() => {
    const targetSlide = targetSlideRef.current;
    const wrapper = wrapperRef.current;
    if (wrapper && targetSlide) {
      wrapper.scrollTo({
        top: 0,
        left: targetSlide.offsetLeft,
        behavior: "smooth",
      });
    }
  }, []);

  const finishScrolling = useCallback(() => {
    setTargetSlide(visibleSlide);
    scrollToTargetSlide();
  }, [visibleSlide, scrollToTargetSlide]);
  const touchScroll = useIdle({ timeout: 500, onIdle: finishScrolling });

  const moveLeft = useCallback(
    (targetSlide) => Math.max(0, targetSlide - 1),
    []
  );
  const moveRight = useCallback(
    (targetSlide) => Math.min(targetSlide + 1, projects.length - 1),
    [projects]
  );

  const handleScroll = useCallback(() => {
    let { width } = wrapperRef.current.getBoundingClientRect();
    let { scrollLeft } = wrapperRef.current;

    setVisibleSlide(Math.round(scrollLeft / width));
    // touchScroll();
  }, [touchScroll]);

  useEffect(scrollToTargetSlide, [targetSlide]);

  return (
    <div id="trap" tabIndex="0">
      <button onClick={() => setTargetSlide(moveLeft)}>PREV</button>

      {projects.map((_, i) => {
        return (
          <Dot
            key={`dot-${i}`}
            isActive={visibleSlide === i}
            onClick={() => setTargetSlide(i)}
          >
            {i + 1}
          </Dot>
        );
      })}
      <button onClick={() => setTargetSlide(moveRight)}>NEXT</button>

      <div className="wrapper" onScroll={handleScroll} ref={wrapperRef}>
        {projects.map((project, i) => {
          return (
            <div className="card">
              <p>
                {project.year} - {project.location}
              </p>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wheel;
