import { notFound } from "next/navigation";
import { getPage } from "@/lib/getPage";
import { TypeClinicPage, TypeWebsiteModuleFaQs, TypeSeoMetadata } from "@/types/contentful";
import { HeroClinic, Container, RichText } from "@/components/ui";
import { FooterClinic, Register, BannerWithImg, FAQ } from "@/components/modules";
import { Document } from "@contentful/rich-text-types";
import { MaxWidth } from "@/utils/styling";
import { Asset } from "contentful";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const content = (await getPage({
    pageContentType: "clinicPage",
    slug: params.slug,
    locale: "en-US",
  })) as TypeClinicPage<undefined, string>;

  if (!content || !content.fields) {
    return notFound();
  }

  const metaData = content.fields.seoMetadata as TypeSeoMetadata<undefined, string>;
  const openGraph = metaData.fields.featuredImage as Asset;

  return {
    title: metaData && metaData.fields.seoTitle ? metaData.fields.seoTitle : content.fields.title,
    description:
      metaData && metaData.fields.seoDescription
        ? metaData.fields.seoDescription
        : `Next Level Sports - ${content.fields.title}`,
    alternates: metaData && metaData.fields.canonicalUrl ? { canonical: metaData.fields.canonicalUrl } : null,
    robots: metaData && metaData.fields.hidePageSearchEngines ? "noindex,nofollow" : "index,follow",
    openGraph: openGraph ? { images: openGraph.fields.file?.url } : null,
  };
}

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

      {joinContent ? (
        <Container maxWidth={MaxWidth.XSmall}>
          <RichText content={joinContent} className="join-descr" />
        </Container>
      ) : null}

      <Register pageSlug={content.fields.slug} pageName={content.fields.title as string} />

      <BannerWithImg />

      {clinicFAQs ? <FAQ content={clinicFAQs} location="[Accordion] - FAQs Clinic Page" /> : null}

      <FooterClinic />
    </>
  );
}
