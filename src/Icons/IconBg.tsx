import React from "react";

const IconBg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none">
      <g clip-path="url(#a)">
        <path fill="#000633" d="M0 0h50v50H0z" />
        <g filter="url(#b)">
          <path fill="url(#c)" fill-opacity=".6" d="M-31-38h43v64h-43z" />
        </g>
      </g>
      <defs>
        <linearGradient
          id="c"
          x1="-31"
          x2="24.296"
          y1="-39.185"
          y2="12.961"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#003BFF" />
          <stop offset="1" stop-color="#003BFF" stop-opacity="0" />
        </linearGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h50v50H0z" />
        </clipPath>
        <filter
          id="b"
          width="111.4"
          height="132.4"
          x="-65.2"
          y="-72.2"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_2083_72203"
            stdDeviation="17.1"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default IconBg;
