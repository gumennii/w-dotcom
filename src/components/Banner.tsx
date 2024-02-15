import { Container } from "./Container";
import { MaxWidth } from "@/utils/styling";
import classNames from "classnames";

type BannerProps = {
  programName: string;
  programType: string;
  className?: string;
};

export const Banner = ({ programName, programType, className }: BannerProps) => {
  return (
    <div className={classNames("w-full bg-secondary text-white py-20", className)}>
      <Container maxWidth={MaxWidth.Small}>
        <h2 className="font-bold text-2xl mb-2 md:text-3xl md:mb-4 lg:mb-6 lg:text-4xl ">Next Level {programType}</h2>
        <h1 className="font-bold text-3xl italic uppercase md:text-4xl lg:text-5xl">{programName}</h1>
      </Container>
    </div>
  );
};
