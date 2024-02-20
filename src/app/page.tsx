import LogoCloud from "@/components/LogoCloud";
import { getPage } from "@/lib/getPage";
import { Image, Container } from "@/components";
import { MaxWidth } from "@/utils/styling";
import { Asset } from "contentful";
import { meta } from "./_metadata";

export const metadata = meta;

const logoCloudProps = {
  title: "In Partnership with",
  logos: [
    {
      imagePath: "https://img.logoipsum.com/300.svg",
      linkPath: "#",
      altText: "Team Snap",
    },
    {
      imagePath: "https://img.logoipsum.com/331.svg",
      linkPath: "#",
      altText: "Nike Team",
    },
    {
      imagePath: "https://img.logoipsum.com/323.svg",
      linkPath: "#",
      altText: "Gear Up Sports",
    },
  ],
};

export default async function Page() {
  const content = await getPage({
    pageContentType: "marketingPageProgram",
    slug: "2024-advanced-volleyball-tracy-hs",
    locale: "en-US",
  });

  const coverImage = content.fields.coverImage as Asset;

  return (
    <div className="container mx-auto px-5">
      <Container maxWidth={MaxWidth.Small} className="mt-14 mb-8">
        <Image
          src={`https:${coverImage.fields.file?.url}`}
          width={900}
          height={420}
          alt="Priority Registration"
          link="/program/2024-advanced-volleyball-tracy-hs"
        />
      </Container>
      {/* This is a test LogoCloud section componeand nt will be probably used here with real data*/}
      <LogoCloud {...logoCloudProps} />
    </div>
  );
}
