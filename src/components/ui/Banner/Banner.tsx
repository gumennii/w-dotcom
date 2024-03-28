import React from "react";
import { MaxWidth } from "@/utils/styling";
import classNames from "classnames";
import { Container } from "../Container";

type BannerProps = {
  programName: string;
  programType: string;
  className?: string;
};

export const Banner = ({ programName, programType, className }: BannerProps) => {
  return (
    <div className={classNames("w-full bg-secondary text-white py-20", className)}>
      <Container maxWidth={MaxWidth.Small}>
        <h2 className="mb-2 font-sant leading-normal font-bold text-xl md:text-2xl lg:text-3xl">
          Next Level {programType}
        </h2>
        <h1 className="font-roboto font-bold text-3xl italic uppercase md:text-4xl lg:text-5xl">{programName}</h1>
      </Container>
    </div>
  );
};
