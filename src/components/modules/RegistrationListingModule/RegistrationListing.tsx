"use client";

import { Button, Divider } from "@/components/ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { Fragment } from "react";

import { format as dateFormat } from "date-fns";

export type TDivision = {
  id: number;
  Location: string;
  divisionName: string;
  scDivisionId: string;
  divisionGameTime: string;
  divisionTeamSize: number;
  divisionTeamCount: number;
  divisionMaxPlayers: number;
  divisionPracticeTime: string;
  registrationEnd: string;
  seasonStart: string;
  seasonEnd: string;
};

export interface RegistrationListingProps {
  programName: string;
  programType: string;
  divisions: TDivision[];
  price: number;
}

export const RegistrationListing = ({ programName, programType, divisions, price }: RegistrationListingProps) => {
  return (
    <>
      <h4 className="mb-1 font-inter text-sm font-semibold leading-normal text-secondary md:text-lg">
        General Registration is open on April 15th at 9:00 AM
      </h4>
      <p className="texr-xs mb-6 font-inter leading-normal lg:text-sm">
        Limited slots available. Register now to avoid incurring a late registration fee.
      </p>
      <div className="flex flex-col gap-4">
        {divisions.map((division, i) => (
          <Fragment key={division.scDivisionId}>
            <div className="flex flex-col justify-between gap-2 rounded-md border p-4 shadow-sm sm:flex-row">
              <div className="flex flex-col gap-2">
                <h3 className="font-inter text-sm font-semibold leading-normal sm:text-lg">{division.divisionName}</h3>
                <span className="font-inter text-xs leading-relaxed sm:text-sm">
                  Season Dates: {dateFormat(division.seasonStart, "MMM d, y")} —{" "}
                  {dateFormat(division.seasonEnd, "MMM d, y")}
                </span>
                <div className="flex flex-row items-center gap-4">
                  <span className="font-xs mr-3 font-inter font-semibold leading-relaxed sm:text-base">
                    ${price.toFixed(2)}
                  </span>
                  <span className="font-inter text-xxxs sm:text-xs">
                    <FontAwesomeIcon icon={faUsers as IconProp} className="mr-2 h-4 w-4 text-gray-500" />
                    {division.divisionTeamCount} teams
                  </span>
                  <span className="font-inter text-xxxs sm:text-xs">
                    <FontAwesomeIcon icon={faUser as IconProp} className="mr-2 h-4 w-4 text-gray-500" />
                    {division.divisionMaxPlayers} players per team
                  </span>
                </div>
              </div>
              <Divider className="block border sm:hidden" />
              <div className="flex flex-row items-center justify-between sm:flex-col sm:items-end">
                <span className="font-inter text-xxxs leading-relaxed sm:text-xs">Only a few spots left!</span>
                <Button
                  rounded
                  style="secondary"
                  copy="Register Now"
                  href={`https://registration.bluesombrero.com/4384/available-programs?divisionId=${division.scDivisionId}`}
                  className="text-xs"
                />
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
};
