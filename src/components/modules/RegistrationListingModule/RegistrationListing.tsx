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
      <h4 className="text-sm leading-relaxed font-semibold text-secondary mb-1 md:text-lg">
        General Registration is open from {divisions[0].seasonStart} to {divisions[0].seasonEnd}
      </h4>
      <p className="texr-sx leading-relaxed mb-6 lg:text-sm">
        Limited slots available. Register now to avoid incurring a late registration fee.
      </p>
      <div className="flex flex-col gap-4">
        {divisions.map((division, i) => (
          <Fragment key={division.scDivisionId}>
            <div className="border p-4 flex flex-col sm:flex-row justify-between gap-2 rounded-md shadow-sm">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold leading-normal">{division.divisionName}</h3>
                <span className="text-sm leading-relaxed">
                  Starts on {division.seasonStart} and ends on {division.seasonEnd}
                </span>
                <div className="flex flex-row items-center gap-4">
                  <span className="font-semibold leading-relaxed font-base mr-3">$315.00</span>
                  <span className="text-sx">
                    <FontAwesomeIcon icon={faUser as IconProp} className="mr-2 w-4 h-4 text-gray-500" />
                    {division.divisionMaxPlayers} players
                  </span>
                  <span className="text-sx">
                    <FontAwesomeIcon icon={faUsers as IconProp} className="mr-2 w-4 h-4 text-gray-500" />
                    {division.divisionTeamCount} teams
                  </span>
                </div>
              </div>
              <Divider className="border-dashed sm:hidden block" />
              <div className="flex flex-row sm:flex-col justify-between items-center sm:items-end">
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
