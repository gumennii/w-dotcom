import { Banner, Container, Divider } from "@/components";
import { RegistrationListing } from "@/modules";
import { type TDivision } from "@/modules/RegistrationListiongModule/RegistrationListing";
import ProgramNavigation from "@/modules/ProgramNavigation";
import Table from "@/components/Table/Table";
import { getPage } from "@/lib/getPage";
import { Markdown } from "@/lib/markdown";
import { getProgramNavigationLinks } from "@/utils/navigation";
import { MaxWidth } from "@/utils/styling";

type Schedule = {
  week: string;
  date: string;
};

export default async function SchedulePage({ params }: { params: { slug: string } }) {
  const content = await getPage({
    pageContentType: "marketingPageProgram",
    slug: params.slug,
    locale: "en-US",
  });

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
      <Banner programName={content.fields.programName as string} programType={content.fields.programType as string} />

      <ProgramNavigation>
        <ProgramNavigation.Body>
          <ProgramNavigation.Links links={getProgramNavigationLinks(params?.slug)} />
          <ProgramNavigation.Actions />
        </ProgramNavigation.Body>
      </ProgramNavigation>

      <Container maxWidth={MaxWidth.Small} className="flex flex-col gap-y-14 my-14">
        <div>
          <h2 className="font-bold text-2xl mb-6 md:text-3xl lg:text-4xl">Practice & Game Times</h2>

          <Table textAlign={"center"} data={gameTimesTableData} />

          <div className="prose note">
            <Markdown content={{ json: content.fields.notes }} />
          </div>

          <Divider className="mt-4 lg:mt-8" />
        </div>

        <div>
          <h2 className="font-bold text-2xl mb-6 md:text-3xl lg:text-4xl">Game Schedule</h2>

          <Table textAlign={"left"} data={scheduleTableData} equalColumns={false} />

          <div className="prose note">
            <Markdown content={{ json: content.fields.scheduleNotes }} />
          </div>

          <Divider className="mt-4 lg:mt-8" />
        </div>

        <div>
          <h2 className="font-bold text-2xl mb-6 md:text-3xl lg:text-4xl" id="registration">
            Registration Listing
          </h2>
          <RegistrationListing
            programName={content.fields.programName as string}
            programType={content.fields.programType as string}
            divisions={content.fields.divisions as TDivision[]}
            price={content.fields.price as number}
          />
        </div>
      </Container>
    </>
  );
}
