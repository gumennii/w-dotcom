import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeProgramDataSkeleton } from "./TypeProgramData";
import type { TypeSeoMetadataSkeleton } from "./TypeSeoMetadata";

export interface TypeMarketingPageProgramFields {
  programName: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  seoMetadata: EntryFieldTypes.EntryLink<TypeSeoMetadataSkeleton>;
  heroDescription: EntryFieldTypes.RichText;
  heroImage: EntryFieldTypes.AssetLink;
  programRegistrationStatus?: EntryFieldTypes.Symbol;
  seasonDescription?: EntryFieldTypes.RichText;
  coverImage?: EntryFieldTypes.AssetLink;
  coverVideo?: EntryFieldTypes.Symbol;
  programOverview?: EntryFieldTypes.RichText;
  leagueOperations?: EntryFieldTypes.RichText;
  programData: EntryFieldTypes.EntryLink<TypeProgramDataSkeleton>;
}

export type TypeMarketingPageProgramSkeleton = EntrySkeletonType<
  TypeMarketingPageProgramFields,
  "marketingPageProgram"
>;
export type TypeMarketingPageProgram<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeMarketingPageProgramSkeleton,
  Modifiers,
  Locales
>;
