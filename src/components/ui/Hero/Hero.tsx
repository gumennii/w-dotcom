import React from "react";
import { MaxWidth, getHeroGradientByProgramType, getTextColorByProgramType } from "@/utils/styling";
import classNames from "classnames";
import { Container } from "../Container";
import { Logo, Button, VideoModal } from "@/components/ui";
import Link from "next/link";
import cn from "@/utils/cn";

export type HeroProps = {
  programName: string;
  programType: string;
  className?: string;
  urlVideo?: string;
};

export const Hero = ({ programName, programType, className, urlVideo }: HeroProps) => {
  const textColor = getTextColorByProgramType(programType);
  const heroBgGradient = getHeroGradientByProgramType(programType);

  return (
    <div
      className={classNames("w-full bg-cover py-20 text-white", className)}
      style={{
        backgroundImage: `${heroBgGradient}, url("/banner.png")`,
      }}
    >
      <Container maxWidth={MaxWidth.Footer}>
        <div className="mb-4 flex flex-col justify-center gap-4 text-center md:text-left">
          <Link href="/">
            <Logo color="light" className="mx-auto md:mx-0" />
          </Link>
          <h1 className="font-superline text-7xl font-bold uppercase italic lg:text-[11.875rem]">
            <span
              className={cn(
                "mb-2 block font-roboto text-xl font-bold uppercase not-italic leading-normal md:text-2xl lg:text-3xl",
                textColor
              )}
            >
              {programName.substring(0, programName.indexOf("-"))}
            </span>
            {programName.indexOf("-") === -1 ? programName : programName.substring(programName.indexOf("-") + 2)}
          </h1>
          <p className="max-w-full font-inter text-sm md:text-base lg:max-w-[50%] lg:text-lg">
            The program starts in January and runs through March.
            <br />
            Open to 5th - 8th Graders.
          </p>
          <div className="h-4" />
          <div className="flex flex-col font-roboto text-lg font-bold uppercase md:flex-row md:text-xl lg:text-2xl">
            <h3 className={textColor}>now open:&nbsp;</h3>
            <h3>general registration</h3>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-3 md:justify-start">
          <Button rounded style="white" copy="Register Now" href={`#registration`} />
          {urlVideo ? (
            <VideoModal maxWidth="2xLarge" url={urlVideo}>
              <Button
                rounded
                style="ghost"
                copy="&#9654; Watch Teaser"
                // href={`https://registration.bluesombrero.com/4384/available-programs`}
              />
            </VideoModal>
          ) : null}
        </div>
      </Container>
    </div>
  );
};
