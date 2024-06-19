import { Text, Button, VideoModal, Container, Image, VideoPlayBtn } from "@/components/ui";
import { MaxWidth } from "@/utils/styling";
import { Asset } from "contentful";

type GeneralProgramOperationProps = {
  coverVideo: string;
  coverImage?: Asset;
  programType: string;
  slug: string;
};

export const GeneralProgramOperation = ({
  coverVideo,
  programType,
  slug,
  coverImage,
}: GeneralProgramOperationProps) => {
  return (
    <Container maxWidth={MaxWidth.Small}>
      <VideoModal maxWidth="2xLarge" url={coverVideo}>
        {coverImage && Object.keys(coverImage).length && coverImage.fields.file?.url ? (
          <div className="relative w-full">
            <Image
              src={coverImage?.fields?.file?.url as string}
              alt={`Image ${programType}`}
              width={900}
              height={420}
              borderRadius="large"
            />
            <VideoPlayBtn className="absolute left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 text-white duration-500 hover:text-primary" />
          </div>
        ) : (
          <Button rounded style="outline" copy="&#9654; Watch Teaser" />
        )}
      </VideoModal>
      <Text type="h2" className="mb-4 mt-8">
        General Program Operation and Additional Information
      </Text>
      <div className="flex flex-col items-center justify-between gap-y-4 md:flex-row">
        <Text type="h6" className="w-full md:w-[70%]">
          {`Review the general program operations, program information and philosophies of the Next Level ${programType}
          program`}
        </Text>
        <Button
          href={`/program/${slug}/operations`}
          style="outline"
          copy="Learn more"
          rounded
          className="w-full border border-solid border-primary hover:border-primary md:w-auto"
        />
      </div>
    </Container>
  );
};
