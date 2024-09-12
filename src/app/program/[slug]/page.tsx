import { notFound } from "next/navigation";
import { getPage } from "@/lib/getPage";
import { getProgramNavigationLinks } from "@/utils/navigation";
import { MaxWidth } from "@/utils/styling";
import { Document } from "@contentful/rich-text-types";
import { TypeMarketingPageProgram, TypePeople, TypeProgramData, TypeSeoMetadata } from "@/types/contentful";
import { Asset } from "contentful";
import { Container, Hero, InteractiveModal, RichText } from "@/components/ui";
import {
  VideoContainer,
  ProgramNavigation,
  RegistrationListing,
  Subscribe,
  type TDivision,
  Profile,
  ProgramAccordion,
  type ISeasonDates,
  ProgramNavigationTrack,
} from "@/components/modules";
import { Footer } from "@/components/modules/Navigation/Footer";
import { format as dateFormat, parse } from "date-fns";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const content = (await getPage({
    pageContentType: "marketingPageProgram",
    slug: params.slug,
    locale: "en-US",
  })) as TypeMarketingPageProgram<undefined, string>;

  if (!content || !content.fields) {
    return notFound();
  }

  const metaData = content.fields.seoMetadata as TypeSeoMetadata<undefined, string>;
  const openGraph = metaData && metaData.fields?.featuredImage ? (metaData.fields.featuredImage as Asset) : null;

  return {
    title: metaData && metaData.fields?.seoTitle ? metaData.fields.seoTitle : content.fields.programName,
    description:
      metaData && metaData.fields?.seoDescription
        ? metaData.fields.seoDescription
        : `Next Level Sports - ${content.fields.programName}`,
    alternates: metaData && metaData.fields?.canonicalUrl ? { canonical: metaData.fields.canonicalUrl } : null,
    robots: metaData && metaData.fields?.hidePageSearchEngines ? "noindex,nofollow" : "index,follow",
    openGraph: openGraph ? { images: openGraph.fields.file?.url } : null,
  };
}

type Schedule = {
  id: string;
  date: string;
  eventType: string;
  specialNote?: string;
};

export default async function ProgramPage({ params }: { params: { slug: string } }) {
  const content = (await getPage({
    pageContentType: "marketingPageProgram",
    slug: params.slug,
    locale: "en-US",
  })) as TypeMarketingPageProgram<undefined, string>;

  if (!content || !content.fields) {
    return notFound();
  }

  const programData = content.fields.programData as TypeProgramData<undefined, string>;
  const coverImage = content.fields.coverImage as Asset;
  const heroImage = content.fields.heroImage as Asset;
  const seasonDescription = content.fields.seasonDescription as Document;
  const programOverview = content.fields.programOverview as Document;
  const leagueOperations = content.fields.leagueOperations as Document;
  const siteDirectorData = programData.fields.siteDirector as TypePeople<undefined, string>[];
  const divisionsList = programData.fields.divisions as TDivision[];
  const scheduleList = programData.fields.schedule as Schedule[];

  const gameTimesTableData = divisionsList?.map(item => {
    return {
      "grade level": item.divisionName,
      practice:
        item.divisionPracticeTime.indexOf("M") === -1
          ? dateFormat(parse(item.divisionPracticeTime.slice(0, 8), "HH:mm:ss", new Date()), "h:mm a")
          : item.divisionPracticeTime.slice(0, 1) === "0"
            ? item.divisionPracticeTime.slice(1, 8)
            : item.divisionPracticeTime.slice(0, 8),
      game:
        item.divisionGameTime.indexOf("M") === -1
          ? dateFormat(parse(item.divisionGameTime.slice(0, 8), "HH:mm:ss", new Date()), "h:mm a")
          : item.divisionGameTime.slice(0, 1) === "0"
            ? item.divisionGameTime.slice(1, 8)
            : item.divisionGameTime.slice(0, 8),
    };
  });
  const scheduleTableData = scheduleList?.map(item => {
    if (programData.fields.programType && programData.fields.programType === "Volleyball") {
      return {
        week: item.id,
        date: dateFormat(item.date, "EEEE, MMMM d"),
      };
    } else {
      return {
        week: item.id,
        date: dateFormat(item.date, "EEEE, MMMM d"),
        "event type": item.eventType,
      };
    }
  });

  const seasonDates: ISeasonDates = {
    start: scheduleList.slice(0)[0].date,
    end: scheduleList.slice(-1)[0].date,
  };

  return (
    <>
      <InteractiveModal
        position={50}
        maxWidth="2xLarge"
        className="max-w-[40.25rem] rounded-lg bg-[#051227] md:rounded-2xl"
        closeOnClickOutside
        trakingLocation="[Modal] - Program Page Subscribe"
        trakingTriger="[Modal] - Subscribe Form"
        cookieValue="displayForm"
      >
        <Subscribe
          variant="modal"
          title="Stay in The Game"
          descriprion={`Sign up for our ${programData.fields.programName as string} to stay up to date.`}
          className="rounded-2xl bg-[#051227] p-6 text-center text-white lg:p-8"
          trackingFields={content.fields.slug}
          trackingName="Modal"
          programName={content.fields.programName}
        />
      </InteractiveModal>
      <Hero
        programName={content.fields.programName as string}
        programType={programData.fields.programType as string}
        heroDescr={content.fields.heroDescription}
        urlVideo={content.fields.coverVideo}
        registrationStatus={content.fields.programRegistrationStatus}
        registrationType={content.fields.programRegistrationType}
        backgroundImage={heroImage}
      />

      <ProgramNavigation>
        <ProgramNavigation.Body>
          <ProgramNavigation.Links links={getProgramNavigationLinks(params?.slug)} />
          {/* <ProgramNavigation.Actions /> */}
          <ProgramNavigationTrack
            className={
              content.fields.programRegistrationStatus && content.fields.programRegistrationType ? "" : "btn-disabled"
            }
          />
        </ProgramNavigation.Body>
      </ProgramNavigation>

      <Container maxWidth={MaxWidth.Small}>
        <RichText content={seasonDescription} className="season mb-8 mt-10" />
      </Container>

      <Container maxWidth={MaxWidth.Video}>
        <VideoContainer
          coverVideo={content.fields.coverVideo as string}
          programType={programData.fields.programType as string}
          slug={params.slug as string}
          coverImage={coverImage}
        />
      </Container>

      <Container maxWidth={MaxWidth.Small}>
        <ProgramAccordion
          overview={programOverview}
          operations={leagueOperations}
          gameTimesData={gameTimesTableData}
          scheduleData={scheduleTableData}
        />
      </Container>

      <Container maxWidth={MaxWidth.Small} className="my-8 flex flex-col">
        <h2 className="mb-2 font-roboto text-lg font-semibold lg:text-2xl" id="registration">
          Registration Listing
        </h2>
        <RegistrationListing
          divisions={programData.fields.divisions as TDivision[]}
          price={programData.fields.programCost as number}
          seasonDates={seasonDates}
          registrationStatus={content.fields.programRegistrationStatus}
          registrationType={content.fields.programRegistrationType}
          startRegistration={programData.fields.programLaunchDate}
        />
      </Container>

      <Container maxWidth={MaxWidth.Small} className="my-8 flex flex-col gap-y-8">
        <Profile title="Site Director" contents={siteDirectorData[0]} />
      </Container>

      <div className="bg-[#0F2344] text-white sm:px-4 md:px-8 2xl:px-2">
        <Container maxWidth={MaxWidth.Footer}>
          <Subscribe
            title="Stay Tuned For Updates"
            descriprion={`Stay informed about our ${programData.fields.programName as string} program! Subscribe to our offseason newsletter for exclusive updates, thrilling highlights, and insider insights.`}
            variant="wide"
            trackingFields={content.fields.slug}
            trackingName="Footer"
            programName={content.fields.programName}
          />
        </Container>
      </div>
      <Footer />
    </>
  );
}
