"use client";

import React, { useState } from "react";
import { Accordion, AccordionProgramItem, Table, RichText, Markdown } from "@/components/ui";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import useAmplitudeContext from "@/hooks/amplitude";
import cn from "@/utils/cn";

type GameTimesData = {
  "grade level": string;
  practice: string;
  game: string;
};
type ScheduleData = {
  week: string;
  date: string;
  "event type"?: string;
};

interface ProgramAccordionProps {
  overview: Document;
  operations: Document;
  gameTimesData: GameTimesData[];
  scheduleData: ScheduleData[];
}

export const ProgramAccordion = ({ overview, operations, gameTimesData, scheduleData }: ProgramAccordionProps) => {
  const { trackAmplitudeEvent } = useAmplitudeContext();

  const clickHandler = (name: string) => {
    trackAmplitudeEvent("click", {
      button: name,
      location: "[Accordion] - Program Page",
    });
  };

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
        onClick={() => {
          handleActiveId("overview");
          clickHandler("[Open/Close] - Program Overview");
        }}
        className={cn({ "pointer-events-none cursor-default opacity-35": !overview })}
      >
        <div className="season prose pt-4">{documentToReactComponents(overview)}</div>
      </AccordionProgramItem>

      <AccordionProgramItem
        title="Program Logistics"
        id="operations"
        isOpen={activeId === "operations"}
        onClick={() => {
          handleActiveId("operations");
          clickHandler("[Open/Close] - Program Logistics");
        }}
        className={cn({ "pointer-events-none cursor-default opacity-35": !operations })}
      >
        <div className="season prose">{documentToReactComponents(operations)}</div>
      </AccordionProgramItem>
      <AccordionProgramItem
        title="Program Date & Time"
        id="schedule"
        isOpen={activeId === "schedule"}
        className={cn("border-b-0", {
          "pointer-events-none cursor-default opacity-35": !gameTimesData && !scheduleData,
        })}
        onClick={() => {
          handleActiveId("schedule");
          clickHandler("[Open/Close] - Program Date & Time");
        }}
      >
        {gameTimesData ? (
          <div className="mb-6">
            <h3 className="my-4 font-inter text-sm font-semibold leading-normal lg:text-lg">Practice & Game Times</h3>

            <Table textAlign={"center"} data={gameTimesData} />
          </div>
        ) : null}

        {scheduleData ? (
          <div>
            <h3 className="my-4 font-inter text-sm font-semibold leading-normal lg:text-lg">Game Schedule</h3>

            <Table textAlign={"left"} data={scheduleData} />
          </div>
        ) : null}
      </AccordionProgramItem>
    </Accordion>
  );
};
