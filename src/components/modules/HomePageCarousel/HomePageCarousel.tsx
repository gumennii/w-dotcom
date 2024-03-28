"use client";

import React from "react";
import Link from "next/link";
import { TypeMarketingPageProgram } from "@/types/contentful";
import { Asset } from "contentful";
import { MaxWidth } from "@/utils/styling";
import { Carousel, Container, Image, Text } from "@/components/ui";

type HomePageCarouselProps = {
  items: TypeMarketingPageProgram<undefined, string>[];
};

export const HomePageCarousel = ({ items }: HomePageCarouselProps) => {
  return (
    <Carousel display="dashed">
      {items.map(item => {
        const coverImage = item.fields.coverImage as Asset;
        const programName = item.fields.programName as string;
        const programType = item.fields.programType as string;

        return (
          <Carousel.Item key={item.fields.slug}>
            <Link className="lg:relative w-full" href={`/program/${item.fields.slug}`}>
              <Image
                src={coverImage?.fields?.file?.url as string}
                alt={programName}
                width={2000}
                height={710}
                borderRadius="none"
                className="w-full md:h-[27rem] lg:h-[44.313rem]"
              />
              <Container
                className="bg-[#0F2344] lg:bg-transparent lg:absolute lg:left-1/2 lg:-translate-x-2/4 lg:bottom-16 text-white w-full flex flex-col items-start md:items-center lg:gap-y-4 pt-4"
                maxWidth={MaxWidth.Footer}
              >
                <Text type="h1" className="uppercase italic">
                  Next Level {programType}
                </Text>
                <Text type="h4">{programName}</Text>
              </Container>
            </Link>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

HomePageCarousel.displayName = "HomePageCarousel";
