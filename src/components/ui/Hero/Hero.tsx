import React from "react";
import Link from "next/link";
import { MaxWidth, getHeroGradientByProgramType, getTextColorByProgramType } from "@/utils/styling";
import cn from "@/utils/cn";
import { Container } from "../Container";
import { Logo, Button, VideoModal } from "@/components/ui";

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
      className={cn("relative w-full bg-cover py-20 text-white lg:px-6 2xl:px-0", className)}
      style={{
        backgroundImage: `url("/banner.png")`,
      }}
    >
      <div className={`absolute inset-0 ${heroBgGradient}`}></div>
      <Container maxWidth={MaxWidth.Footer} className="relative z-10">
        <div className="mb-6 flex flex-col justify-start text-center md:text-left">
          <Link href="/" className="mb-6">
            <Logo color="light" className="mx-auto md:mx-0" />
          </Link>
          <h1 className="font-superline text-7xl font-bold uppercase italic leading-snug lg:text-[10.75rem]">
            <span
              className={cn(
                "block font-roboto text-xl font-bold uppercase not-italic leading-normal md:text-2xl lg:text-3xl",
                textColor
              )}
            >
              {programName.substring(0, programName.indexOf("-"))}
            </span>
            {programName.indexOf("-") === -1 ? programName : programName.substring(programName.indexOf("-") + 2)}
          </h1>
          <p className="mb-12 max-w-full font-inter text-sm leading-normal md:text-base lg:mb-16 lg:max-w-[50%] lg:text-lg">
            The program starts in January and runs through March.
            <br />
            Open to 5th - 8th Graders.
          </p>
          <div className="flex flex-col font-roboto text-lg font-bold uppercase leading-normal md:flex-row md:text-xl lg:text-2xl">
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
