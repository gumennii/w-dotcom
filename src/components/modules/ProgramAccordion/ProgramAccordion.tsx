"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Accordion, AccordionProgramItem, Table } from "@/components/ui";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import useAmplitudeContext from "@/hooks/amplitude";
import cn from "@/utils/cn";

type GameTimesData = {
  "grade level": string;
  practice?: string;
  game?: string;
  start?: string;
  end?: string;
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
  programType: string;
}

export const ProgramAccordion = ({
  overview,
  operations,
  gameTimesData,
  scheduleData,
  programType,
}: ProgramAccordionProps) => {
  const params = useParams();
  const { trackAmplitudeEvent } = useAmplitudeContext();

  const clickHandler = (name: string) => {
    trackAmplitudeEvent("click", {
      button: name,
      location: "[Accordion] - Program Page",
    });
  };

  const [activeIds, setActiveIds] = useState<string[]>(["accordion-section-overview"]);

  const toggleAccordionSection = (id: string) => {
    if (activeIds?.includes(id)) {
      setActiveIds(activeIds.filter(section => section !== id));
    } else {
      setActiveIds([id, ...activeIds]);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (window.location.hash) {
        const section = window.location.hash.slice(1);
        if (!activeIds?.includes(`accordion-section-${section}`)) {
          setActiveIds([`accordion-section-${section}`, ...activeIds]);
        }
      }
    }, 100);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <Accordion className="relative">
      <AccordionProgramItem
        title="Program Overview"
        id="accordion-section-overview"
        isOpen={activeIds?.includes("accordion-section-overview")}
        onClick={() => {
          toggleAccordionSection("accordion-section-overview");
          clickHandler("[Open/Close] - Program Overview");
        }}
        className={cn({ "pointer-events-none cursor-default opacity-35": !overview })}
      >
        <div className="invisible absolute -top-20" id="overview" />
        <div className="season prose pt-4">{documentToReactComponents(overview)}</div>
      </AccordionProgramItem>

      <AccordionProgramItem
        title="Program Logistics"
        id="accordion-section-operations"
        isOpen={activeIds?.includes("accordion-section-operations")}
        onClick={() => {
          toggleAccordionSection("accordion-section-operations");
          clickHandler("[Open/Close] - Program Logistics");
        }}
        className={cn({ "pointer-events-none cursor-default opacity-35": !operations })}
      >
        <div className="invisible absolute -top-20" id="operations" />
        <div className="season prose">{documentToReactComponents(operations)}</div>
      </AccordionProgramItem>
      <AccordionProgramItem
        title="Program Date & Time"
        id="accordion-section-schedule"
        isOpen={activeIds?.includes("accordion-section-schedule")}
        className={cn("border-b-0", {
          "pointer-events-none cursor-default opacity-35": !gameTimesData && !scheduleData,
        })}
        onClick={() => {
          toggleAccordionSection("accordion-section-schedule");
          clickHandler("[Open/Close] - Program Date & Time");
        }}
      >
        <div className="invisible absolute -top-20" id="schedule" />
        {gameTimesData ? (
          <div className="mb-6">
            <h3 className="my-4 font-inter text-sm font-semibold leading-normal lg:text-lg">
              {programType === "Volleyball" ? "Activity Times" : "Practice & Game Times"}
            </h3>

            <Table textAlign={"left"} data={gameTimesData} />
          </div>
        ) : null}

        {scheduleData ? (
          <div>
            <h3 className="my-4 font-inter text-sm font-semibold leading-normal lg:text-lg">Activity Schedule</h3>

            <Table textAlign={"left"} data={scheduleData} />
          </div>
        ) : null}
      </AccordionProgramItem>
    </Accordion>
  );
};
