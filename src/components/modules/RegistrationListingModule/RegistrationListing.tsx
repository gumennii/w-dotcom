"use client";

import { Button, Table, Divider, Container } from "@/components/ui";
import RegistrationListingCollapse from "./RegistrationListingCollapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

// import { RegistrationCard } from "@/components/modules";

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
      <div className="flex flex-col gap-4">
        {
          divisions.map((division, i) => (
            <>
              <div className="border p-4 flex flex-col sm:flex-row justify-between gap-2 rounded-md shadow-sm">
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold">{division.divisionName}</h1>
                  <span>
                    Starts on {division.seasonStart} and ends on {division.seasonEnd}
                  </span>
                  <div className="flex flex-row gap-3">
                    <span className="font-bold">
                      $315.00
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faUser} className="mr-1 w-3 h-3 text-gray-500" />

                      {division.divisionMaxPlayers} players
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faUsers} className="mr-1 w-3 h-3 text-gray-500" />

                      {division.divisionTeamCount} teams
                    </span>
                  </div>
                </div>
                <Divider className="border-dashed sm:hidden block" />
                <div className="flex flex-row sm:flex-col justify-between items-center sm:items-end">
                  <span>General Registration is open</span>
                  <Button
                    rounded
                    style="secondary"
                    copy="Register Now"
                    href={`https://registration.bluesombrero.com/4384/available-programs?divisionId=${division.scDivisionId}`}
                  />
                </div>
              </div >
            </>
          ))}
      </div >
    </>
  );
};
