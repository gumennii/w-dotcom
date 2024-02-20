import { GeneralProgramOperation, RegistrationListing } from "@/modules";
import { type TDivision } from "@/modules/RegistrationListiongModule/RegistrationListing";
import ProgramNavigation from "@/modules/ProgramNavigation";
import { getPage } from "@/lib/getPage";
import { getProgramNavigationLinks } from "@/utils/navigation";
import { MaxWidth } from "@/utils/styling";
import { Container, Banner, Image, Divider } from "@/components";
import { Asset } from "contentful";
import { Document } from "@contentful/rich-text-types";
import { Markdown } from "@/lib/markdown";
import { SingUp } from "@/modules";

export default async function ProgramPage({ params }: { params: { slug: string } }) {
  const content = await getPage({
    pageContentType: "marketingPageProgram",
    slug: params.slug,
    locale: "en-US",
  });

  const coverImage = content.fields.coverImage as Asset;
  const seasonDescription = content.fields.seasonDescription as Document;

  return (
    <>
      <Banner programName={content.fields.programName as string} programType={content.fields.programType as string} />

      <ProgramNavigation>
        <ProgramNavigation.Body>
          <ProgramNavigation.Links links={getProgramNavigationLinks(params?.slug)} />
          <ProgramNavigation.Actions />
        </ProgramNavigation.Body>
      </ProgramNavigation>

      <Container maxWidth={MaxWidth.Small} className="mt-14 mb-8">
        <Image
          src={`https:${coverImage.fields.file?.url}`}
          width={900}
          height={420}
          alt="Priority Registration"
          link="#registration"
        />
        <div className="prose season">
          <Markdown content={{ json: seasonDescription }} />
        </div>
      </Container>

      <Divider className="m-auto max-w-4xl my-4 lg:my-8" />

      <GeneralProgramOperation
        coverVideo={content.fields.coverVideo as string}
        programType={content.fields.programType as string}
        slug={params.slug as string}
      />

      <Divider className="m-auto max-w-4xl my-4 lg:my-8" />

      <Container maxWidth={MaxWidth.Small}>
        <SingUp
          title="Want news and updates?"
          descriprion="Sign up for our newsletter to stay up to date."
          className="rounded-md bg-primary"
        />
      </Container>

      <Divider className="m-auto max-w-4xl mt-4 lg:mt-8" />

      <Container maxWidth={MaxWidth.Small} className="flex flex-col my-14">
        <h2 className="text-primary text-3xl font-bold mb-4" id="registration">
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
