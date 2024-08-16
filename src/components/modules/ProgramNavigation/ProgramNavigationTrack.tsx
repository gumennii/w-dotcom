"use client";

import React from "react";
import Link from "next/link";
import useAmplitudeContext from "@/hooks/amplitude";
import cn from "@/utils/cn";

export const ProgramNavigationTrack = ({ className }: { className?: string }) => {
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
        className={cn("btn btn-secondary rounded-full p-4 font-roboto text-xs text-white", className)}
      >
        Register now
      </Link>
    </div>
  );
};
