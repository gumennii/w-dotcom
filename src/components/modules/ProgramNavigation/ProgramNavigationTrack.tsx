"use client";

import React from "react";
import Link from "next/link";
import useAmplitudeContext from "@/hooks/amplitude";

export const ProgramNavigationTrack = () => {
  const { trackAmplitudeEvent } = useAmplitudeContext();

  const clickHandler = () => {
    trackAmplitudeEvent("click", {
      button: "Register Now",
      location: "[Navigation] - Program Navigation",
    });
  };
  return (
    <div>
      <Link
        href="#registration"
        onClick={() => clickHandler()}
        className="btn btn-secondary rounded-full p-4 font-roboto text-xs text-white"
      >
        Register now
      </Link>
    </div>
  );
};
