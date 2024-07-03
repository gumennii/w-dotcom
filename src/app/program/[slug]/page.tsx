import { notFound } from "next/navigation";
import { getPage } from "@/lib/getPage";
import { getProgramNavigationLinks } from "@/utils/navigation";
import { MaxWidth } from "@/utils/styling";
import { Document } from "@contentful/rich-text-types";
import { TypeMarketingPageProgram, TypePeople } from "@/types/contentful";
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
} from "@/components/modules";
import { Footer } from "@/components/modules/Navigation/Footer";
import { format as dateFormat } from "date-fns";

type Schedule = {
  week: string;
  date: string;
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

  const coverImage = content.fields.coverImage as Asset;
  const seasonDescription = content.fields.seasonDescription as Document;
  const programOverview = content.fields.programOverview as Document;
  const leagueOperations = content.fields.leagueOperations as Document;
  const siteDirectorData = content.fields.siteDirector as TypePeople<undefined, string>;
  const divisionsList = content.fields.divisions as TDivision[];
  const scheduleList = content.fields.schedule as Schedule[];

  const gameTimesTableData = divisionsList?.map(item => {
    return {
      "grade level": item.divisionName,
      practice: item.divisionPracticeTime,
      game: item.divisionGameTime,
    };
  });
  const scheduleTableData = scheduleList?.map(item => {
    return {
      week: item.week,
      date: dateFormat(item.date, "EEEE, MMMM d"),
    };
  });

  return (
    <>
      <InteractiveModal
        position={50}
        maxWidth="2xLarge"
        className="max-w-[40.25rem] rounded-lg bg-[#051227] md:rounded-2xl"
        closeOnClickOutside
      >
        <Subscribe
          variant="modal"
          title="Stay in The Game"
          descriprion={`Sign up for our ${content.fields.programName as string} to stay up to date.`}
          className="rounded-2xl bg-[#051227] p-6 text-center text-white lg:p-8"
          trackingFields={content.fields.slug as string}
        />
      </InteractiveModal>
      <Hero
        programName={content.fields.programName as string}
        programType={content.fields.programType as string}
        urlVideo={content.fields.coverVideo}
      />

      <ProgramNavigation>
        <ProgramNavigation.Body>
          <ProgramNavigation.Links links={getProgramNavigationLinks(params?.slug)} />
          <ProgramNavigation.Actions />
        </ProgramNavigation.Body>
      </ProgramNavigation>

      <Container maxWidth={MaxWidth.Small}>
        <RichText content={seasonDescription} className="season mb-8 mt-10" />
      </Container>

      <Container maxWidth={MaxWidth.Video}>
        <VideoContainer
          coverVideo={content.fields.coverVideo as string}
          programType={content.fields.programType as string}
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
          gameTimesNotes={content.fields.notes}
          scheduleNotes={content.fields.scheduleNotes}
        />
      </Container>

      <Container maxWidth={MaxWidth.Small} className="my-8 flex flex-col">
        <h2 className="mb-2 font-roboto text-lg font-semibold lg:text-2xl" id="registration">
          Registration Listing
        </h2>
        <RegistrationListing
          programName={content.fields.programName as string}
          programType={content.fields.programType as string}
          divisions={content.fields.divisions as TDivision[]}
          price={content.fields.price as number}
        />
      </Container>

      <Container maxWidth={MaxWidth.Small} className="my-8 flex flex-col gap-y-8">
        <Profile title="Site Director" contents={siteDirectorData} />
      </Container>

      <div className="bg-[#0F2344] text-white sm:px-4 md:px-8 2xl:px-2">
        <Container maxWidth={MaxWidth.Footer}>
          <Subscribe
            title="Stay Tuned For Updates"
            descriprion={`Stay informed about our ${content.fields.programName as string} program! Subscribe to our offseason newsletter for exclusive updates, thrilling highlights, and insider insights.`}
            variant="wide"
            trackingFields={content.fields.slug as string}
          />
        </Container>
      </div>
      <Footer />
    </>
  );
}
