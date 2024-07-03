"use client";
import React, { useState } from "react";
import { MaxWidth } from "@/utils/styling";
import { Container, Accordion, AccordionItem } from "@/components/ui";

export const FAQ = () => {
  const [activeId, setActiveId] = useState<string | null>();

  const handleActiveId = (id: string) => {
    setActiveId(prevId => (prevId === id ? null : id));
  };

  return (
    <div className="bg-[#0F2344] py-8 lg:py-16">
      <Container maxWidth={MaxWidth.XSmall}>
        <h2 className="font-roboto text-xl font-bold leading-normal text-white lg:text-3xl">FAQs</h2>
        <Accordion>
          <AccordionItem
            title="Are the Flag Football programs co-ed?"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            id="item-1"
            theme="dark"
            isOpen={activeId === "item-1"}
            onClick={handleActiveId}
          />
          <AccordionItem
            title="Can my child play up or down a grade level?"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            id="item-2"
            theme="dark"
            isOpen={activeId === "item-2"}
            onClick={handleActiveId}
          />
          <AccordionItem
            title="Does Next Level schedule games around NFL playoffs and Super Bowl?"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            id="item-3"
            theme="dark"
            isOpen={activeId === "item-3"}
            onClick={handleActiveId}
          />
        </Accordion>
      </Container>
    </div>
  );
};
