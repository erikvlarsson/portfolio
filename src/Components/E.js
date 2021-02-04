import React from "react";

export default function E() {
  return (
    <svg
      viewBox="0 0 13 16"
      width="80"
      height="100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(255,255,0)" stopOpacity="1" />
          <stop offset="100%" stopColor="red" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        fill="url(#grad)"
        fill="#191a1b"
        d="M 12 0 q -2 0 -4 0 q -8 0 -8 8 q 0 8 8 8 q 2 0 4 0 q 0 -3 -3 -3 q -1.5 0 -1 0 q -5 0 -5 -5 q 0 -5 5 -5 q 0.5 0 1 0 q 3 0 3 -3 m -5 9 q 1.5 0 3 0 q 2 0 2 -3 q -2.5 0 -5 0 q -1 0 -1 1 q 0 0.5 0 1 q 0 1 1 1"
      />
    </svg>
  );
}
