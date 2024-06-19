import { notFound } from "next/navigation";
import { getPage } from "@/lib/getPage";
import { getProgramNavigationLinks } from "@/utils/navigation";
import { MaxWidth } from "@/utils/styling";
import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Markdown } from "@/lib/markdown";
import { TypeMarketingPageProgram, TypePeople } from "@/types/contentful";
import { Asset } from "contentful";
import {
  Container,
  Hero,
  Divider,
  InteractiveModal,
  Accordion,
  AccordionProgramItem,
  Text,
  Table,
} from "@/components/ui";
import {
  GeneralProgramOperation,
  ProgramNavigation,
  RegistrationListing,
  Subscribe,
  type TDivision,
  Profile,
} from "@/components/modules";
import { Footer } from "@/components/modules/Navigation/Footer";

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
      date: item.date,
    };
  });

  return (
    <>
      <InteractiveModal position={50} maxWidth="2xLarge" className="rounded-xl bg-[#051227]">
        <Subscribe
          variant="modal"
          title="Stay in The Game"
          descriprion="Sign up for our Flag Football Program at Alhambra High School Offseason Newsletter to stay up to date."
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
        <Accordion>
          <AccordionProgramItem id="#overview" isOpen={true}>
            <div className="season prose mb-8 mt-10">
              <Markdown content={{ json: seasonDescription }} />
            </div>

            <GeneralProgramOperation
              coverVideo={content.fields.coverVideo as string}
              programType={content.fields.programType as string}
              slug={params.slug as string}
              coverImage={coverImage}
            />

            <Divider className="m-auto my-4 max-w-4xl lg:my-8" />

            <Subscribe
              title="Want news and updates?"
              descriprion="Sign up for our newsletter to stay up to date."
              className="mb-8 rounded-2xl bg-[#051227]"
              trackingFields={content.fields.slug as string}
            />
          </AccordionProgramItem>
          <AccordionProgramItem title="League Operations" id="operations">
            <div className="season prose">{documentToReactComponents(leagueOperations)}</div>
          </AccordionProgramItem>
          <AccordionProgramItem title="Schedule" id="schedule">
            <div>
              <Text type="h3" className="mb-6">
                Practice & Game Times
              </Text>

              <Table textAlign={"center"} data={gameTimesTableData} />

              <div className="note prose">
                <Markdown content={{ json: content.fields.notes }} />
              </div>

              <Divider className="my-4 lg:my-8" />
            </div>

            <div>
              <Text type="h3" className="mb-6">
                Game Schedule
              </Text>

              <Table textAlign={"left"} data={scheduleTableData} equalColumns={false} />

              <div className="note prose">
                <Markdown content={{ json: content.fields.scheduleNotes }} />
              </div>
            </div>
          </AccordionProgramItem>
        </Accordion>
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

      <Divider className="m-auto mt-4 max-w-4xl lg:mt-8" />

      <Container maxWidth={MaxWidth.Small} className="my-8 flex flex-col gap-y-8">
        <Profile title="Site Director" contents={siteDirectorData} />
      </Container>

      <div className="bg-[#0F2344] sm:px-4 md:px-8 2xl:px-2">
        <Container maxWidth={MaxWidth.Footer}>
          <Subscribe
            title="Stay Tuned For Updates"
            descriprion="Stay informed about our Flag Football program at Alhambra High School! Subscribe to our offseason newsletter for exclusive updates, thrilling highlights, and insider insights."
            variant="wide"
            trackingFields={content.fields.slug as string}
          />
        </Container>
      </div>
      <Footer />
    </>
  );
}
