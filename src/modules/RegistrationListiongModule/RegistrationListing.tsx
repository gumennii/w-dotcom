"use client";

import Table from "@/components/Table/Table";
import { Button } from "@/components/Button";
import RegistrationListingCollapse from "./RegistrationListingCollapse";

type TDivision = {
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
    <Table textAlign={"center"}>
      <Table.Head>
        <Table.Cell isHead align="left">
          Division
        </Table.Cell>
        <Table.Cell isHead>Price</Table.Cell>
        <Table.Cell isHead></Table.Cell>
      </Table.Head>

      <Table.Body>
        {divisions.map((division, i) => (
          <Table.Row key={division.scDivisionId}>
            <Table.Cell align="left">
              <RegistrationListingCollapse
                division={division}
                programName={programName}
                programType={programType}
                open={i === 0 ? true : false}
              />
            </Table.Cell>

            <Table.Cell className="text-sm lg:text-base lg:w-36">${price}</Table.Cell>

            <Table.Cell className="lg:w-52">
              <Button
                rounded
                style="secondary"
                copy="Register"
                href={`https://registration.bluesombrero.com/4384/available-programs?divisionId=${division.scDivisionId}`}
              />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export { type TDivision };
