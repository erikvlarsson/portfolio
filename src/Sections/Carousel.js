import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    name: "My first website",
    description:
      "I built my first site (and taught myself how to design and code) by reverse-engineering sites that I admired.",
    year: 2014,
    location: "Malmö, Sweden",
  },
  {
    name: "Arborot AB",
    description: "What I did at Arborot AB",
    year: 2020,
    location: "Malmö, Sweden",
  },
  {
    name: "Strategic 9",
    description: "What I did at S9",
    year: 2020,
    location: "Malmö, Sweden",
  },
  // {
  //   name: "Portfolio Website",
  //   description: "Building this shit",
  //   year: 2021,
  //   location: "Malmö, Sweden",
  // },
];

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
    };
    return (
      <div style={{ border: "1px solid red", width: "100%" }}>
        <Slider {...settings}>
          {projects.map((p) => {
            return (
              <div>
                <p>{p.year}</p>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
