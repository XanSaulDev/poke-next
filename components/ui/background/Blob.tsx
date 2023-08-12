import React, { FC } from 'react'

interface Props {
  className?: string;
  width?: string;
  height?: string;
}

export const Blob: FC<Props> = ({className,height,width}) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ||"800"}
    height={height || "800"}
    viewBox="0 0 257 240"
    fill="none"
    className={`fixed -z-50 ${className}`}
  >
    <g filter="url(#filter0_f_203_20)">
      <path
        d="M211.483 184.742C191.07 199.035 76.8643 204.385 58.6468 193.56C40.4294 182.735 38.8934 155.565 40.5562 134.742C42.219 113.919 71.7113 50.3568 88.5 42.2681C105.289 34.1793 142.233 56.2123 160.983 62.7419C179.733 69.2716 179.695 88.8882 181.124 107.802"
        fill="url(#paint0_linear_203_20)"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_203_20"
        x="0.0471191"
        y="0.507156"
        width="256.377"
        height="238.793"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="20"
          result="effect1_foregroundBlur_203_20"
        />
      </filter>
      <linearGradient
        id="paint0_linear_203_20"
        x1="25.9994"
        y1="52.152"
        x2="197.902"
        y2="226.076"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#D24074" />
        <stop offset="1" stop-color="#6518B4" />
      </linearGradient>
    </defs>
  </svg>
  )
}
