import React, { useState } from "react";
import { TDivision } from "./RegistrationListing";
import Collapse from "@/components/Collapse";

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
      <Collapse.Title className="leading-normal text-sm lg:text-base font-semibold cursor-pointer">
        {programType} {division.Location} • {division.divisionName}
        <p className="leading-normal text-xs lg:text-sm font-normal">
          Registration closes on: {division.registrationEnd}
        </p>
        <p className="leading-normal text-xs lg:text-sm font-normal">
          Season dates: {division.seasonStart} to {division.seasonEnd}
        </p>
        <p className="leading-normal text-xs lg:text-sm underline font-normal">{toggleText}</p>
      </Collapse.Title>
      <Collapse.Content>
        <p className="leading-normal text-xs lg:text-sm">
          {division.divisionName} - {programName}
        </p>
        <ul className="leading-normal list-disc list-inside ml-3">
          <li className="leading-normal text-xs lg:text-sm">
            {division.divisionName} - {programName}
          </li>
          <li className="leading-normal text-xs lg:text-sm">
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
