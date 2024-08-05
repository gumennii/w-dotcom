import React from "react";
import Link from "next/link";
import { MaxWidth } from "@/utils/styling";
import cn from "@/utils/cn";
import { Container } from "../Container";
import { Logo, RichText } from "@/components/ui";
import { Document } from "@contentful/rich-text-types";
import { Asset } from "contentful";

export type HeroClinicProps = {
  heroTitle: string;
  heroDescr: Document;
  className?: string;
  backgroundImage: Asset;
};

export const HeroClinic = ({ heroTitle, heroDescr, className, backgroundImage }: HeroClinicProps) => {
  const heroImage = backgroundImage?.fields?.file?.url || "";

  return (
    <div
      className={cn("relative w-full bg-[#081D3C] bg-cover py-20 text-white lg:px-6 2xl:px-0", className)}
      style={{
        backgroundImage: `url("${heroImage}")`,
      }}
    >
      <div className="absolute inset-0 bg-[#000C36] opacity-85"></div>
      <Container maxWidth={MaxWidth.Footer} className="relative z-10">
        <div className="mb-6 flex flex-col justify-start text-center md:text-left">
          <Link href="/" className="mb-6">
            <Logo color="light" className="mx-auto md:mx-0" />
          </Link>
          <h1 className="font-superline text-7xl font-bold uppercase italic leading-snug lg:text-[10.75rem]">
            <span className="block font-roboto text-xl font-bold uppercase not-italic leading-normal text-[#EC612A] md:text-2xl lg:text-3xl">
              {heroTitle.substring(0, heroTitle.indexOf("-"))}
            </span>
            {heroTitle.indexOf("-") === -1 ? heroTitle : heroTitle.substring(heroTitle.indexOf("-") + 2)}
          </h1>
          <RichText
            content={heroDescr}
            className="clinic-hero mb-12 max-w-full font-inter text-sm leading-normal text-white md:text-base lg:mb-16 lg:max-w-[50%] lg:text-lg"
          />
        </div>
      </Container>
    </div>
  );
};
