import { notFound } from "next/navigation";
import LogoCloud from "@/components/LogoCloud";
import { getPage } from "@/lib/getPage";
import { MaxWidth } from "@/utils/styling";
import { TypeMarketingPageProgram, TypeModuleCTA, TypeWebsiteHomePage } from "@/types/contentful";
import { Asset } from "contentful";
import { meta } from "./_metadata";
import { Container, Divider, Video, Text } from "@/components";
import { CallToAction, HomePageCarousel, ProgramCards } from "@/modules";
import MobileApp from "@/components/MobileApp";
import { CookieConsent } from "@/components";

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

const storeCtaArgs = {
  title: "GEAR UP FOR THE NEW SEASON",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.",
  className: "text-primary p-0",
  buttonData: {
    url: "#",
    name: "Shop Now",
  },
};

export default async function Page() {
  const content = (await getPage({
    pageContentType: "websiteHomePage",
    slug: "home",
    locale: "en-US",
  })) as TypeWebsiteHomePage<undefined, string>;

  if (!content) {
    return notFound();
  }

  const heroCarousel = content.fields.carousel as TypeMarketingPageProgram<undefined, string>[];
  const coverVideo = content.fields.coverVideo as string;
  const ctaHeroData = content.fields.ctaHero as TypeModuleCTA<undefined, string>;

  const heroImages = ctaHeroData?.fields.images.reverse().map(image => {
    const ctaImage = image as Asset;

    return {
      src: ctaImage?.fields?.file?.url as string,
      alt: ctaImage?.fields.title as string,
    };
  });

  const ctaArgs = {
    introText: ctaHeroData.fields.headline,
    title: ctaHeroData.fields.title,
    subtitle: ctaHeroData.fields.description,
    className: "text-primary p-0",
    images: heroImages,
    buttonData: {
      url: ctaHeroData.fields.ctaLink as string,
      name: ctaHeroData.fields.ctaTitle as string,
    },
  };

  return (
    <>
      <CookieConsent />
      <HomePageCarousel items={heroCarousel} />
      <div className="container mx-auto px-5">
        <Container className="flex flex-col gap-y-8 py-8 lg:py-16" maxWidth={MaxWidth.Footer}>
          <ProgramCards />
        </Container>

        <Divider className="m-auto max-w-screen-lg" />

        <Container className="flex flex-col gap-y-8 py-8 lg:py-16" maxWidth={MaxWidth.Footer}>
          <Text type="h1" className="uppercase italic text-center  lg:text-start">
            2024 Season starts now!
          </Text>
          <Video url={coverVideo} />
        </Container>
      </div>

      <div className="bg-[#F3F5F8]">
        <Container className="flex flex-col gap-y-8 py-12 md:py-0" maxWidth={MaxWidth.Footer}>
          <CallToAction {...storeCtaArgs} />
        </Container>
      </div>

      <div className="container mx-auto px-5">
        <Container className="flex flex-col gap-y-8 py-8 md:py-0" maxWidth={MaxWidth.Footer}>
          <CallToAction {...ctaArgs} />
        </Container>

        <Divider className="m-auto max-w-screen-lg" />

        <Container className="py-8 md:py-0" maxWidth={MaxWidth.Footer}>
          <LogoCloud {...logoCloudProps} />
        </Container>

        <Divider className="m-auto max-w-screen-lg mb-6" />
      </div>
      <div className="w-full px-5 bg-primary">
        <Container className="px-0" maxWidth={MaxWidth.Footer}>
          <MobileApp layout="leftTop" />
        </Container>
      </div>
    </>
  );
}
