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
      className={classNames("w-full text-white py-20 bg-cover", className)}
      style={{
        backgroundImage: `${heroBgGradient}, url("/banner.png")`,
      }}
    >
      <Container maxWidth={MaxWidth.Small}>
        <div className="text-center md:text-left justify-center gap-4 flex flex-col mb-4">
          <Link href="/">
            <Logo color="light" className="mx-auto md:mx-0" />
          </Link>
          <h1 className="font-superline font-bold text-7xl italic uppercase lg:text-[11.875rem]">
            <span
              className={cn(
                "mb-2 block font-roboto leading-normal font-bold text-xl not-italic md:text-2xl lg:text-3xl uppercase",
                textColor
              )}
            >
              {programName.substring(0, programName.indexOf("-"))}
            </span>
            {programName.indexOf("-") === -1 ? programName : programName.substring(programName.indexOf("-") + 2)}
          </h1>
          <h2 className="font-inter text-sm md:text-base lg:text-lg max-w-full lg:max-w-[50%]">
            The program starts in January and runs through March. Open to 3rd - 8th Graders.
          </h2>
          <div className="h-4" />
          <div className="flex md:flex-row flex-col uppercase text-lg md:text-xl lg:text-2xl font-roboto font-bold">
            <h3 className={textColor}>now open:&nbsp;</h3>
            <h3>general registration</h3>
          </div>
        </div>
        <div className="flex flex-row justify-center md:justify-start gap-3">
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
