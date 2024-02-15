import React, { useState } from "react";
import { TDivision } from "./RegistrationListing";
import Collapse from "../../Collapse";

interface RegistrationListingCollapseProps {
  division: TDivision;
  programName: string;
  programType: string;
  open: boolean;
}

const RegistrationListingCollapse = ({
  division,
  programName,
  programType,
  open,
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
      <Collapse.Title className="text-xl font-medium cursor-pointer">
        {programType} {division.Location} • {division.divisionName}
        <p className="text-sm lg:text-base font-normal">Registration closes on: {division.registrationEnd}</p>
        <p className="text-sm lg:text-base font-normal">
          Season dates: {division.seasonStart} to {division.seasonEnd}
        </p>
        <p className="text-base underline font-normal">{toggleText}</p>
      </Collapse.Title>
      <Collapse.Content>
        <p className="text-sm lg:text-base">
          {division.divisionName} - {programName}
        </p>
        <ul className="list-disc list-inside ml-3">
          <li className="text-sm lg:text-base">
            {division.divisionName} - {programName}
          </li>
          <li className="text-sm lg:text-base">
            Maximum of {division.divisionMaxPlayers} players ({division.divisionTeamCount} Teams,{" "}
            {division.divisionTeamSize} players per team)
          </li>
        </ul>
      </Collapse.Content>
    </Collapse>
  );
};

RegistrationListingCollapse.displayName = "RegistrationListingCollapse";

export default RegistrationListingCollapse;
