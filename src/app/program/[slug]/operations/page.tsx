import { notFound } from "next/navigation";
import { Banner, Container, Divider, Text } from "@/components";
import { RegistrationListing } from "@/modules";
import { type TDivision } from "@/modules/RegistrationListiongModule/RegistrationListing";
import Profile from "@/modules/Profile";
import ProgramNavigation from "@/modules/ProgramNavigation";
import { getPage } from "@/lib/getPage";
import { TypeMarketingPageProgram, TypePeople } from "@/types/contentful";
import { getProgramNavigationLinks } from "@/utils/navigation";
import { MaxWidth } from "@/utils/styling";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

export default async function OperationsPage({ params }: { params: { slug: string } }) {
  const content = (await getPage({
    pageContentType: "marketingPageProgram",
    slug: params.slug,
    locale: "en-US",
  })) as TypeMarketingPageProgram<undefined, string>;

  if (!content || !content.fields) {
    return notFound();
  }

  const siteDirectorData = content.fields.siteDirector as TypePeople<undefined, string>;
  const leagueOperations = content.fields.leagueOperations as Document;

  return (
    <>
      <Banner programName={content.fields.programName as string} programType={content.fields.programType as string} />

      <ProgramNavigation>
        <ProgramNavigation.Body>
          <ProgramNavigation.Links links={getProgramNavigationLinks(params?.slug)} />
          <ProgramNavigation.Actions />
        </ProgramNavigation.Body>
      </ProgramNavigation>

      <Container maxWidth={MaxWidth.Small}>
        <Text type="h2" className="mt-10 mb-8">
          League Operations
        </Text>
        <div className="prose season">{documentToReactComponents(leagueOperations)}</div>
      </Container>

      <Divider className="max-w-4xl m-auto mt-4 lg:mt-8" />

      <Container maxWidth={MaxWidth.Small} className="flex flex-col gap-y-14 my-14">
        <Profile title="Site Director" contents={siteDirectorData} />
      </Container>

      <Divider className="max-w-4xl m-auto mt-4 lg:mt-8" />

      <Container maxWidth={MaxWidth.Small} className="flex flex-col my-14">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl lg:text-4xl" id="registration">
          Registration Listing
        </h2>
        <RegistrationListing
          programName={content.fields.programName as string}
          programType={content.fields.programType as string}
          divisions={content.fields.divisions as TDivision[]}
          price={content.fields.price as number}
        />
      </Container>
    </>
  );
}
