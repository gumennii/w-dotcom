import { notFound } from "next/navigation";
import { getPage } from "@/lib/getPage";
import { TypeClinicPage, TypeWebsiteModuleFaQs } from "@/types/contentful";
import { HeroClinic, Container, RichText } from "@/components/ui";
import { FooterClinic, Register, BannerWithImg, FAQ } from "@/components/modules";
import { Document } from "@contentful/rich-text-types";
import { MaxWidth } from "@/utils/styling";
import { Asset } from "contentful";

export default async function ClinicPage({ params }: { params: { slug: string } }) {
  const content = (await getPage({
    pageContentType: "clinicPage",
    slug: params.slug,
    locale: "en-US",
  })) as TypeClinicPage<undefined, string>;

  if (!content || !content.fields) {
    return notFound();
  }

  const heroTitle = content.fields.title as string;
  const heroDescr = content.fields.description as Document;
  const heroImage = content.fields.heroImage as Asset;
  const joinContent = content.fields.info as Document;
  const clinicFAQs = content.fields.faQs as TypeWebsiteModuleFaQs<undefined, string>;

  return (
    <>
      <HeroClinic heroTitle={heroTitle} heroDescr={heroDescr} backgroundImage={heroImage} />

      <Container maxWidth={MaxWidth.XSmall}>
        <RichText content={joinContent} className="join-descr" />
      </Container>

      <Register />

      <BannerWithImg />

      {clinicFAQs ? <FAQ content={clinicFAQs} location="[Accordion] - FAQs Clinic Page" /> : null}

      <FooterClinic />
    </>
  );
}
