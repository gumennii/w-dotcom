import React from "react";
import { MaxWidth } from "@/utils/styling";
import classNames from "classnames";
import { Container } from "../Container";
import { Logo, Button } from "@/components/ui";

type BannerProps = {
  programName: string;
  programType: string;
  className?: string;
};

export const Banner = ({ programName, programType, className }: BannerProps) => {
  return (
    <div className={classNames("w-full text-white py-20 bg-cover", className)} style={{
      backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.82) ), url("/banner.png")`,
    }}>
      <Container maxWidth={MaxWidth.Small} >
        <div className="text-center md:text-left justify-center gap-4 flex flex-col mb-4">
          <Logo color="light" className="mx-auto md:mx-0" />
          <h2 className="mb-2 font-sant leading-normal font-bold text-xl md:text-2xl lg:text-3xl uppercase">
            {programName.substring(0, programName.indexOf('-'))}
          </h2>
          <h1 className="font-roboto font-bold text-3xl italic uppercase md:text-6xl lg:text-5xl">{programName.substring(programName.indexOf('-') + 2)}</h1>
          <h2>The program starts in January and runs through March. Open to 3rd - 8th Graders.</h2>
          <div className="flex md:flex-row flex-col uppercase">
            <h3>now open:</h3>
            <h3>general registration</h3>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <Button
            rounded
            style="secondary"
            copy="Register Now"
            href={`#registration`}
          />
          <Button
            rounded
            style="primary"
            copy="Watch Teaser"
            href={`https://registration.bluesombrero.com/4384/available-programs`}
          />
        </div>
      </Container>
    </div>
  );
};
