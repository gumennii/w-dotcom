"use client";

import { Button, Divider } from "@/components/ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { Fragment } from "react";

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
      <h4 className="mb-1 text-sm font-semibold leading-relaxed text-secondary md:text-lg">
        General Registration is open on April 15th at 9:00 AM
      </h4>
      <p className="texr-sx mb-6 leading-relaxed lg:text-sm">
        Limited slots available. Register now to avoid incurring a late registration fee.
      </p>
      <div className="flex flex-col gap-4">
        {divisions.map((division, i) => (
          <Fragment key={division.scDivisionId}>
            <div className="flex flex-col justify-between gap-2 rounded-md border p-4 shadow-sm sm:flex-row">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold leading-normal">{division.divisionName}</h3>
                <span className="text-sm leading-relaxed">
                  Season Dates: {division.seasonStart} — {division.seasonEnd}
                </span>
                <div className="flex flex-row items-center gap-4">
                  <span className="font-base mr-3 font-semibold leading-relaxed">$315.00</span>
                  <span className="text-sx">
                    <FontAwesomeIcon icon={faUser as IconProp} className="mr-2 h-4 w-4 text-gray-500" />
                    {division.divisionMaxPlayers} players
                  </span>
                  <span className="text-sx">
                    <FontAwesomeIcon icon={faUsers as IconProp} className="mr-2 h-4 w-4 text-gray-500" />
                    {division.divisionTeamCount} teams
                  </span>
                </div>
              </div>
              <Divider className="block border-dashed sm:hidden" />
              <div className="flex flex-row items-center justify-between sm:flex-col sm:items-end">
                <span className="text-sx leading-normal">General Registration is open</span>
                <Button
                  rounded
                  style="secondary"
                  copy="Register Now"
                  href={`https://registration.bluesombrero.com/4384/available-programs?divisionId=${division.scDivisionId}`}
                  className="text-sx"
                />
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
};
