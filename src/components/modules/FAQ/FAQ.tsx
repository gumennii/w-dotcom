"use client";
import React, { useState } from "react";
import { MaxWidth } from "@/utils/styling";
import { Container, Accordion, AccordionItem } from "@/components/ui";
import { TypeWebsiteModuleFaQs, TypeModelFaq } from "@/types/contentful";
import useAmplitudeContext from "@/hooks/amplitude";
import { sendGTMEvent } from "@next/third-parties/google";

type FAQProps = {
  content: TypeWebsiteModuleFaQs<undefined, string>;
  location?: string;
};

export const FAQ = ({ content, location }: FAQProps) => {
  const faqs = content.fields.faQs as TypeModelFaq<undefined, string>[];
  const [activeId, setActiveId] = useState<string | null>();
  const { trackAmplitudeEvent } = useAmplitudeContext();

  const clickHandler = (title: string, location: string) => {
    trackAmplitudeEvent("click", {
      button: `[Open/Close] - ${title}`,
      location: location,
    });
    sendGTMEvent({
      event: "clicked_accordion",
      value: { value: `[Open/Close] - ${title}`, location: location },
    });
  };

  const handleActiveId = (id: string) => {
    setActiveId(prevId => (prevId === id ? null : id));
  };

  return (
    <div className="bg-[#0F2344] py-8 lg:py-16">
      <Container maxWidth={MaxWidth.XSmall}>
        <h2 className="font-roboto text-xl font-bold leading-normal text-white lg:text-3xl">FAQs</h2>
        <Accordion>
          {faqs.map(faq => (
            <AccordionItem
              key={faq.sys.id}
              title={faq.fields.question}
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              id={faq.sys.id}
              theme="dark"
              isOpen={activeId === faq.sys.id}
              onClick={() => {
                handleActiveId(faq.sys.id);
                if (location) clickHandler(faq.fields.question, location);
              }}
            />
          ))}
        </Accordion>
      </Container>
    </div>
  );
};
