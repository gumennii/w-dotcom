import { notFound } from "next/navigation";
import { getPage } from "@/lib/getPage";
import { TypeClinicPage } from "@/types/contentful";
import { HeroClinic, Container, RichText } from "@/components/ui";
import { FooterClinic, Register, BannerWithImg, FAQ } from "@/components/modules";
import { Document } from "@contentful/rich-text-types";
import { MaxWidth } from "@/utils/styling";

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
  const joinContent = content.fields.info as Document;

  return (
    <>
      <HeroClinic heroTitle={heroTitle} heroDescr={heroDescr} />

      <Container maxWidth={MaxWidth.XSmall}>
        <RichText content={joinContent} className="join-descr" />
      </Container>

      <Register />

      <BannerWithImg />

      <FAQ />

      <FooterClinic />
    </>
  );
}
