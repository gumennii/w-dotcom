import React, { useState } from "react";
import { TDivision, ISeasonDates } from "./RegistrationListing";
import { Collapse } from "@/components/ui";

interface RegistrationListingCollapseProps {
  division: TDivision;
  programName: string;
  programType: string;
  open: boolean;
  seasonDates: ISeasonDates;
  registrationEnd: string;
}

const RegistrationListingCollapse = ({
  division,
  programName,
  programType,
  open,
  seasonDates,
  registrationEnd,
}: RegistrationListingCollapseProps) => {
  const [toggleText, setToggleText] = useState(open ? "See Less" : "See More");

  const onOpen = () => {
    setToggleText("See Less");
  };
  const onClose = () => {
    setToggleText("See More");
  };

  return (
    <Collapse open={open} onOpen={onOpen} onClose={onClose}>
      <Collapse.Title className="cursor-pointer text-sm font-semibold leading-normal lg:text-base">
        {programType} {division.Location} • {division.divisionName}
        <p className="text-xs font-normal leading-normal lg:text-sm">Registration closes on: {registrationEnd}</p>
        <p className="text-xs font-normal leading-normal lg:text-sm">
          Season dates: {seasonDates.start} to {seasonDates.end}
        </p>
        <p className="text-xs font-normal leading-normal underline lg:text-sm">{toggleText}</p>
      </Collapse.Title>
      <Collapse.Content>
        <p className="text-xs leading-normal lg:text-sm">
          {division.divisionName} - {programName}
        </p>
        <ul className="ml-3 list-inside list-disc leading-normal">
          <li className="text-xs leading-normal lg:text-sm">
            {division.divisionName} - {programName}
          </li>
          <li className="text-xs leading-normal lg:text-sm">
            Teams of division - ({division.divisionTeamCount}, {""} {division.divisionTeamSize} players per team)
          </li>
        </ul>
      </Collapse.Content>
    </Collapse>
  );
};

RegistrationListingCollapse.displayName = "RegistrationListingCollapse";

export default RegistrationListingCollapse;
