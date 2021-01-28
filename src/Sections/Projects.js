import React from "react";
import Wheel from "../Components/Wheel/Wheel";

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
  {
    name: "Portfolio Website",
    description: "Building this shit",
    year: 2021,
    location: "Malmö, Sweden",
  },
];
export default function Work() {
  return (
    <section>
      <h1>Selected Works</h1>
      <Wheel projects={projects} />
    </section>
  );
}
