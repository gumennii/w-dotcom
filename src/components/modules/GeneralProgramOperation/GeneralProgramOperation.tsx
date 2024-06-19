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
    <div>
      <VideoModal maxWidth="2xLarge" url={coverVideo}>
        {coverImage && Object.keys(coverImage).length && coverImage.fields.file?.url ? (
          <div className="relative w-full py-10">
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
    </div>
  );
};
