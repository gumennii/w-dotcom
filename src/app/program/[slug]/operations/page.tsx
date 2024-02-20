import { Banner, Container, Divider } from "@/components";
import { LeagueOperations, RegistrationListing } from "@/modules";
import { type TDivision } from "@/modules/RegistrationListiongModule/RegistrationListing";
import Profile from "@/modules/Profile";
import ProgramNavigation from "@/modules/ProgramNavigation";
import { getPage } from "@/lib/getPage";
import { TypeModuleSiteDirector, TypeTopicSiteDirector } from "@/types/contentful";
import { getProgramNavigationLinks } from "@/utils/navigation";
import { MaxWidth } from "@/utils/styling";
import { Asset } from "contentful";

export default async function OperationsPage({ params }: { params: { slug: string } }) {
  const content = await getPage({
    pageContentType: "marketingPageProgram",
    slug: params.slug,
    locale: "en-US",
  });

  const siteDirectorData = content.fields.siteDirector as TypeModuleSiteDirector<undefined, string>;
  const siteDirectorDetails = siteDirectorData.fields.siteDirectorDetails as TypeTopicSiteDirector<undefined, string>;

  const { siteDirectorName, siteDirectorBio, siteDirectorPhoto } = siteDirectorDetails.fields;

  const siteDirectorPhotoAsset = siteDirectorPhoto as Asset;

  const profileData = {
    title: "Site Director",
    content: siteDirectorBio,
    name: siteDirectorName,
    imagePath: siteDirectorPhotoAsset.fields.file?.url as string,
  };

  return (
    <>
      <Banner programName={content.fields.programName as string} programType={content.fields.programType as string} />

      <ProgramNavigation>
        <ProgramNavigation.Body>
          <ProgramNavigation.Links links={getProgramNavigationLinks(params?.slug)} />
          <ProgramNavigation.Actions />
        </ProgramNavigation.Body>
      </ProgramNavigation>

      <LeagueOperations />

      <Container maxWidth={MaxWidth.Small} className="flex flex-col gap-y-14 my-14">
        <Profile {...profileData} />
      </Container>

      <Divider className="m-auto max-w-4xl mt-4 lg:mt-8" />

      <Container maxWidth={MaxWidth.Small} className="flex flex-col my-14">
        <h2 className="font-bold text-2xl mb-6 md:text-3xl lg:text-4xl" id="registration">
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
