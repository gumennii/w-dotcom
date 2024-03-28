import { Video } from "@/components/ui/Video";
import { Text } from "@/components/ui/Text/Text";
import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { MaxWidth } from "@/utils/styling";

type GeneralProgramOperationProps = {
  coverVideo: string;
  programType: string;
  slug: string;
};

export const GeneralProgramOperation = ({ coverVideo, programType, slug }: GeneralProgramOperationProps) => {
  return (
    <Container maxWidth={MaxWidth.Small}>
      <Video url={coverVideo} />
      <Text type="h2" className="mt-8 mb-4">
        General Program Operation and Additional Information
      </Text>
      <div className="flex flex-col justify-between items-center gap-y-4 md:flex-row">
        <Text type="h6" className="w-full md:w-[70%]">
          {`Review the general program operations, program information and philosophies of the Next Level ${programType}
          program`}
        </Text>
        <Button
          href={`/program/${slug}/operations`}
          style="ghost"
          copy="Learn more"
          rounded
          className="border border-solid border-primary hover:border-primary w-full md:w-auto"
        />
      </div>
    </Container>
  );
};
