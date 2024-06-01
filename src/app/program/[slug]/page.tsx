import { notFound } from "next/navigation";
import { getPage } from "@/lib/getPage";
import { getProgramNavigationLinks } from "@/utils/navigation";
import { MaxWidth } from "@/utils/styling";
import { Asset } from "contentful";
import { Document } from "@contentful/rich-text-types";
import { Markdown } from "@/lib/markdown";
import { TypeMarketingPageProgram } from "@/types/contentful";
import { Container, Banner, Image, Divider, InteractiveModal } from "@/components/ui";
import {
  GeneralProgramOperation,
  ProgramNavigation,
  RegistrationListing,
  TestForm,
  Subscribe,
  type TDivision,
} from "@/components/modules";

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

  return (
    <>
      <InteractiveModal position={50} maxWidth="2xLarge" className="bg-[#051227] rounded-xl">
        <TestForm
          title="Stay in The Game"
          descriprion="Sign up for our Flag Football Program at Alhambra High School Offseason Newsletter to stay up to date."
        />
      </InteractiveModal>
      <Banner programName={content.fields.programName as string} programType={content.fields.programType as string} />

      <ProgramNavigation>
        <ProgramNavigation.Body>
          <ProgramNavigation.Links links={getProgramNavigationLinks(params?.slug)} />
        </ProgramNavigation.Body>
      </ProgramNavigation>

      <Container maxWidth={MaxWidth.Small} className="mt-14 mb-8">

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
        <Subscribe
          title="Want news and updates?"
          descriprion="Sign up for our newsletter to stay up to date."
          className="rounded-2xl bg-[#051227]"
          trackingFields={content.fields}
        />
      </Container>

      <Divider className="m-auto max-w-4xl mt-4 lg:mt-8" />

      <Container maxWidth={MaxWidth.Small} className="flex flex-col my-8">
        <h2 className="font-sant font-bold text-xl md:text-2xl lg:text-3xl mb-4" id="registration">
          Registration Listing
        </h2>
        <RegistrationListing
          programName={content.fields.programName as string}
          programType={content.fields.programType as string}
          divisions={content.fields.divisions as TDivision[]}
          price={content.fields.price as number}
        />
      </Container>

      <div className="bg-[#0F2344]">
        <Container maxWidth={MaxWidth.Footer}>
          <Subscribe
            title="Stay Tuned For Updates"
            descriprion="Stay informed about our Flag Football program at Alhambra High School! Subscribe to our offseason newsletter for exclusive updates, thrilling highlights, and insider insights."
            variant="wide"
            trackingFields={content.fields}
          />
        </Container>
      </div>
    </>
  );
}
