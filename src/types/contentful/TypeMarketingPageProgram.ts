import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeProgramDataSkeleton } from "./TypeProgramData";

export interface TypeMarketingPageProgramFields {
  programName: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
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
