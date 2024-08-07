"use client";

import React from "react";
import Link from "next/link";
import { MaxWidth, getHeroGradientByProgramType, getTextColorByProgramType } from "@/utils/styling";
import cn from "@/utils/cn";
import { Container } from "../Container";
import { Logo, Button, VideoModal, RichText } from "@/components/ui";
import { Document } from "@contentful/rich-text-types";
import { Asset } from "contentful";
import useAmplitudeContext from "@/hooks/amplitude";

export type HeroProps = {
  programName: string;
  programType: string;
  className?: string;
  urlVideo?: string;
  programStatus?: string;
  heroDescr: Document;
  programRegistrationStatus?: string;
  backgroundImage: Asset;
};

export const Hero = ({
  programName,
  programType,
  className,
  urlVideo,
  programStatus,
  programRegistrationStatus,
  heroDescr,
  backgroundImage,
}: HeroProps) => {
  const textColor = getTextColorByProgramType(programType);
  const heroBgGradient = getHeroGradientByProgramType(programType);
  const heroImage = backgroundImage?.fields?.file?.url || "";

  const { trackAmplitudeEvent } = useAmplitudeContext();

  const clickHandlerRegister = () => {
    trackAmplitudeEvent("click", {
      button: "register now",
      location: "hero block",
    });
  };

  const clickHandlerVideo = () => {
    trackAmplitudeEvent("click", {
      button: "watch teaser",
      location: "hero block",
    });
  };

  return (
    <div
      className={cn("relative w-full bg-[#081D3C] bg-cover py-20 text-white lg:px-6 2xl:px-0", className)}
      style={{
        backgroundImage: `url("${heroImage}")`,
      }}
    >
      <div className={`absolute inset-0 ${heroBgGradient}`}></div>
      <Container maxWidth={MaxWidth.Footer} className="relative z-10">
        <div className="mb-6 flex flex-col justify-start text-center lg:text-left">
          <Link href="/" className="mb-6">
            <Logo color="light" className="mx-auto lg:mx-0" />
          </Link>
          <h1 className="font-superline text-7xl font-bold uppercase italic leading-snug tracking-[0.07rem] lg:text-[10.75rem] lg:tracking-normal">
            <span
              className={cn(
                "block font-roboto text-xl font-bold uppercase not-italic leading-normal tracking-normal md:text-2xl lg:text-3xl",
                textColor
              )}
            >
              {programName.substring(0, programName.indexOf("-"))}
            </span>
            {programName.indexOf("-") === -1 ? programName : programName.substring(programName.indexOf("-") + 2)}
          </h1>
          <RichText
            content={heroDescr}
            className="clinic-hero mb-12 max-w-full font-inter text-sm leading-normal text-white md:text-base lg:mb-16 lg:max-w-[50%] lg:text-lg"
          />
          {programRegistrationStatus && programRegistrationStatus !== "Close" ? (
            <div className="flex flex-col items-center justify-center font-roboto text-lg font-bold uppercase leading-normal md:flex-row md:text-xl lg:justify-start lg:text-2xl">
              <h3 className={textColor}>now open:&nbsp;</h3>
              <h3>{programRegistrationStatus}</h3>
            </div>
          ) : programRegistrationStatus === "Close" ? (
            <div className="flex flex-col items-center justify-center font-roboto text-lg font-bold uppercase leading-normal md:flex-row md:text-xl lg:justify-start lg:text-2xl">
              <h3 className={textColor}>Registration is closed</h3>
            </div>
          ) : null}
        </div>
        <div className="flex flex-row justify-center gap-3 lg:justify-start">
          {programRegistrationStatus && programRegistrationStatus !== "Close" ? (
            <Link
              href="#registration"
              className="btn btn-white rounded-full p-4 font-roboto text-sm text-primary lg:px-6"
              onClick={() => clickHandlerRegister()}
            >
              Register Now
            </Link>
          ) : null}
          {urlVideo ? (
            <VideoModal maxWidth="2xLarge" url={urlVideo}>
              <Button rounded style="ghost" copy="&#9654; Watch Teaser" onClick={() => clickHandlerVideo()} />
            </VideoModal>
          ) : null}
        </div>
      </Container>
    </div>
  );
};
