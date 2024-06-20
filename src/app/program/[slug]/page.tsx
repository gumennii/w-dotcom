import { notFound } from "next/navigation";
import { getPage } from "@/lib/getPage";
import { getProgramNavigationLinks } from "@/utils/navigation";
import { MaxWidth } from "@/utils/styling";
import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Markdown } from "@/lib/markdown";
import { TypeMarketingPageProgram, TypePeople } from "@/types/contentful";
import { Asset } from "contentful";
import { Container, Hero, InteractiveModal, Accordion, AccordionProgramItem, Text, Table } from "@/components/ui";
import {
  VideoContainer,
  ProgramNavigation,
  RegistrationListing,
  Subscribe,
  type TDivision,
  Profile,
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
      <InteractiveModal position={50} maxWidth="2xLarge" className="rounded-xl bg-[#051227]">
        <Subscribe
          variant="modal"
          title="Stay in The Game"
          descriprion={`Stay informed about our ${content.fields.programName as string} program! Subscribe to our offseason newsletter for exclusive updates.`}
          className="rounded-2xl bg-[#051227] p-8 text-center text-white"
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
        <div className="season prose mb-8 mt-10">
          <Markdown content={{ json: seasonDescription }} />
        </div>

        <VideoContainer
          coverVideo={content.fields.coverVideo as string}
          programType={content.fields.programType as string}
          slug={params.slug as string}
          coverImage={coverImage}
        />

        <Accordion>
          <AccordionProgramItem title="Program Overview" id="overview" isOpen={true}>
            <div className="season prose">{documentToReactComponents(programOverview)}</div>
          </AccordionProgramItem>
          <AccordionProgramItem title="Program Logistics" id="operations">
            <div className="season prose">{documentToReactComponents(leagueOperations)}</div>
          </AccordionProgramItem>
          <AccordionProgramItem title="Program Date & Time" id="schedule" className="border-b-0">
            <div className="mb-10">
              <Text type="h4" className="mb-6 font-extralight">
                Practice & Game Times
              </Text>

              <Table textAlign={"center"} data={gameTimesTableData} />

              <div className="note prose mt-6">
                <Markdown content={{ json: content.fields.notes }} />
              </div>
            </div>

            <div>
              <Text type="h4" className="mb-6 font-extralight">
                Game Schedule
              </Text>

              <Table textAlign={"left"} data={scheduleTableData} equalColumns={false} />

              <div className="note prose mt-6">
                <Markdown content={{ json: content.fields.scheduleNotes }} />
              </div>
            </div>
          </AccordionProgramItem>
        </Accordion>
      </Container>

      <Container maxWidth={MaxWidth.Small} className="my-8 flex flex-col">
        <Subscribe
          title="Want news and updates?"
          descriprion="Sign up for our offseason newsletter to stay up to date with our program."
          className="mb-6 rounded-2xl bg-[#051227]"
          trackingFields={content.fields.slug as string}
        />
      </Container>

      <Container maxWidth={MaxWidth.Small} className="my-8 flex flex-col">
        <h2 className="font-sant mb-2 text-xl font-semibold lg:text-2xl" id="registration">
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

      <div className="bg-[#0F2344] sm:px-4 md:px-8 2xl:px-2">
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
