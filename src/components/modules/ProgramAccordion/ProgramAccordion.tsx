"use client";

import React, { useState } from "react";
import { Accordion, AccordionProgramItem, Table, RichText } from "@/components/ui";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

type GameTimesData = {
  "grade level": string;
  practice: string;
  game: string;
};
type ScheduleData = {
  week: string;
  date: string;
};

interface ProgramAccordionProps {
  overview: Document;
  operations: Document;
  gameTimesData: GameTimesData[];
  scheduleData: ScheduleData[];
  gameTimesNotes?: Document;
  scheduleNotes?: Document;
}

export const ProgramAccordion = ({
  overview,
  operations,
  gameTimesData,
  scheduleData,
  gameTimesNotes,
  scheduleNotes,
}: ProgramAccordionProps) => {
  const [activeId, setActiveId] = useState<string | null>("overview");

  const handleActiveId = (id: string) => {
    setActiveId(prevId => (prevId === id ? null : id));
  };

  return (
    <Accordion>
      <AccordionProgramItem
        title="Program Overview"
        id="overview"
        isOpen={activeId === "overview"}
        onClick={handleActiveId}
      >
        <div className="season prose pt-4">{documentToReactComponents(overview)}</div>
      </AccordionProgramItem>

      <AccordionProgramItem
        title="Program Logistics"
        id="operations"
        isOpen={activeId === "operations"}
        onClick={handleActiveId}
      >
        <div className="season prose">{documentToReactComponents(operations)}</div>
      </AccordionProgramItem>
      <AccordionProgramItem
        title="Program Date & Time"
        id="schedule"
        isOpen={activeId === "schedule"}
        className="border-b-0"
        onClick={handleActiveId}
      >
        <div className="mb-6">
          <h3 className="my-4 font-inter text-sm font-semibold leading-normal lg:text-lg">Practice & Game Times</h3>

          <Table textAlign={"center"} data={gameTimesData} />

          <RichText content={gameTimesNotes as Document} className="note mt-4" />
        </div>

        <div>
          <h3 className="my-4 font-inter text-sm font-semibold leading-normal lg:text-lg">Game Schedule</h3>

          <Table textAlign={"left"} data={scheduleData} equalColumns={false} />

          <RichText content={scheduleNotes as Document} className="note mt-4" />
        </div>
      </AccordionProgramItem>
    </Accordion>
  );
};
