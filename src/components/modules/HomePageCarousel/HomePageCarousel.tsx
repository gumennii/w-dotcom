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

        return (
          <Carousel.Item key={item.fields.slug}>
            <Link className="w-full lg:relative" href={`/program/${item.fields.slug}`}>
              <Image
                src={coverImage?.fields?.file?.url as string}
                alt={programName}
                width={2000}
                height={710}
                borderRadius="none"
                className="w-full md:h-[27rem] lg:h-[44.313rem]"
              />
              <Container
                className="flex w-full flex-col items-start bg-[#0F2344] pt-4 text-white md:items-center lg:absolute lg:bottom-16 lg:left-1/2 lg:-translate-x-2/4 lg:gap-y-4 lg:bg-transparent"
                maxWidth={MaxWidth.Footer}
              >
                <Text type="h1" className="uppercase italic">
                  Next Level Sports
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
