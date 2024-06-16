import * as React from "react";
import { SVGProps } from "react";

export const VideoPlayBtn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="5.25em" height="5.25em" fill="none" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M82.41 41.522c0 22.09-17.909 40-40 40s-40-17.91-40-40c0-22.092 17.909-40 40-40s40 17.908 40 40Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M59.788 40.065c1.143.635 1.143 2.278 0 2.913L34.886 56.813a1.667 1.667 0 0 1-2.476-1.457V27.687a1.667 1.667 0 0 1 2.476-1.457l24.902 13.835Z"
    />
  </svg>
);
