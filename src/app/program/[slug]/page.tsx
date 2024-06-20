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
          descriprion="Stay informed about our ${content.fields.programName as string} program! Subscribe to our offseason newsletter for exclusive updates."
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

        <GeneralProgramOperation
          coverVideo={content.fields.coverVideo as string}
          programType={content.fields.programType as string}
          slug={params.slug as string}
          coverImage={coverImage}
        />

        <Accordion>
          <AccordionProgramItem title="Program Overview" id="overview">
            <div className="season prose">
              <Text type="p">
                The Next Level Girls Volleyball program has been developed to provide aspiring volleyball players an
                opportunity to learn the basic skills and functions of competitive volleyball - at an introductory yet
                competitive level. Our program is aimed at the youth athlete who has some-to-none exposure/experience
                with the game of volleyball yet would like to develop the core skills required to participate at a
                higher level in the future (club, middle school, high school). Our site directors are current high
                school/club-level volleyball coaches who have taught the game to a wide variety of age groups - both at
                the more casual level as well as the elite club and elite high school levels. As traditional within Next
                Level, all teams will be coached with the assistance of a high school student-athlete involved within
                the game. For our parents, we seek to keep your weekends free of tangled schedules. All Next Level
                Volleyball program activities will occur at the same time and same day from week to week of our program.
              </Text>
              <ul>
                <li>No prior volleyball experience is required to participate in the Next Level Volleyball Program.</li>
                <li>It is suggested that all players wear proper athletic shoes and knee pads.</li>
                <li>All other equipment will be provided.</li>
                <li>
                  Uniforms are included in the league registration fees, inclusive of home delivery of your uniform.
                </li>
                <li>
                  Our program is community-based, teams are formalized by schoolmates, buddy lists, and friends where
                  possible.
                </li>
              </ul>
            </div>
          </AccordionProgramItem>
          <AccordionProgramItem title="League Operations" id="operations">
            <div className="season prose">{documentToReactComponents(leagueOperations)}</div>
          </AccordionProgramItem>
          <AccordionProgramItem title="Schedule" id="schedule" className="border-b-0">
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
        <Subscribe
          title="Want news and updates?"
          descriprion="Sign up for our newsletter to stay up to date."
          className="mb-8 rounded-2xl bg-[#051227]"
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
