import { Button, VideoModal, Image, VideoPlayBtn } from "@/components/ui";
import { Asset } from "contentful";

type VideoContainerProps = {
  coverVideo: string;
  coverImage?: Asset;
  programType: string;
  slug: string;
};

export const VideoContainer = ({ coverVideo, programType, slug, coverImage }: VideoContainerProps) => {
  return (
    <div>
      <VideoModal maxWidth="3xLarge" url={coverVideo}>
        {coverImage && Object.keys(coverImage).length && coverImage.fields.file?.url ? (
          <div className="relative w-full py-10 lg:px-4 xl:px-0">
            <Image
              src={coverImage?.fields?.file?.url as string}
              alt={`Image ${programType}`}
              width={1088}
              height={612}
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
