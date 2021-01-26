import React from "react";

export default function Wave({ color, style = null }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style={style}
    >
      <path
        fill={color}
        fill-opacity="1"
        d="M0,160L60,154.7C120,149,240,139,360,112C480,85,600,43,720,53.3C840,64,960,128,1080,138.7C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  );
}
