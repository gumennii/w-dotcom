"use client";

import { Button, Divider } from "@/components/ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Fragment } from "react";
import { format as dateFormat } from "date-fns";
import useAmplitudeContext from "@/hooks/amplitude";
import Link from "next/link";
import cn from "@/utils/cn";

export type TDivision = {
  id: number;
  Location: string[];
  divisionName: string;
  scDivisionId: string;
  divisionGameTime: string;
  divisionTeamSize: number;
  divisionTeamCount: number;
  divisionPracticeTime: string;
};

export interface ISeasonDates {
  start: string;
  end: string;
}

export interface RegistrationListingProps {
  programName?: string;
  programType?: string;
  divisions: TDivision[];
  price: number;
  seasonDates: ISeasonDates;
  registrationStatus?: string;
}

export const RegistrationListing = ({
  divisions,
  price,
  seasonDates,
  registrationStatus,
}: RegistrationListingProps) => {
  const { trackAmplitudeEvent } = useAmplitudeContext();

  const clickHandler = () => {
    trackAmplitudeEvent("click", {
      button: "register now",
      location: "program registration",
    });
  };

  return (
    <>
      {registrationStatus && registrationStatus !== "Close" ? (
        <>
          <h4 className="mb-1 font-inter text-sm font-semibold leading-normal text-secondary md:text-lg">
            {registrationStatus} is open on April 15th at 9:00 AM
          </h4>
          <p className="texr-xs mb-6 font-inter leading-normal lg:text-sm">
            Limited slots available. Register now to avoid incurring a late registration fee.
          </p>
        </>
      ) : registrationStatus === "Close" ? (
        <h4 className="mb-6 font-inter text-sm font-semibold leading-normal text-secondary md:text-lg">
          Registration is closed.
        </h4>
      ) : null}
      <div className="flex flex-col gap-4">
        {divisions.map(division => (
          <Fragment key={`division-${division.id}`}>
            <div className="flex flex-col justify-between gap-2 rounded-md border p-4 shadow-sm sm:flex-row">
              <div className="flex flex-col gap-2">
                <h3 className="font-inter text-sm font-semibold leading-normal sm:text-lg">{division.divisionName}</h3>
                <span className="font-inter text-xs leading-relaxed sm:text-sm">
                  Season Dates: {dateFormat(seasonDates.start, "MMM d, y")} — {""}
                  {dateFormat(seasonDates.end, "MMM d, y")}
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
                    {division.divisionTeamSize} players per team
                  </span>
                </div>
              </div>
              <Divider className="block border sm:hidden" />
              <div className="flex flex-row items-center justify-between sm:flex-col sm:items-end">
                <span className="font-inter text-xxxs leading-relaxed sm:text-xs">Only a few spots left!</span>
                {/* <Button
                  rounded
                  style="secondary"
                  copy="Register Now"
                  href={`https://registration.bluesombrero.com/4384/available-programs?divisionId=${division.scDivisionId}`}
                  className="text-xs"
                  disable={!registrationStatus}
                  onClick={clickHandler}
                /> */}
                <Link
                  href={`https://registration.bluesombrero.com/4384/available-programs?divisionId=${division.scDivisionId}`}
                  onClick={() => clickHandler()}
                  className={cn("btn btn-secondary rounded-full p-4 font-roboto text-xs text-white", {
                    "btn-disabled": !registrationStatus,
                  })}
                >
                  Register now
                </Link>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
};
