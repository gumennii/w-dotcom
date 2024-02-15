import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeModuleSiteDirectorSkeleton } from "./TypeModuleSiteDirector";

export interface TypeMarketingPageProgramFields {
  programName: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  programType: EntryFieldTypes.Symbol;
  seasonDescription?: EntryFieldTypes.RichText;
  coverImage?: EntryFieldTypes.AssetLink;
  coverVideo?: EntryFieldTypes.Symbol;
  divisions?: EntryFieldTypes.Object;
  notes?: EntryFieldTypes.RichText;
  schedule?: EntryFieldTypes.Object;
  scheduleNotes?: EntryFieldTypes.RichText;
  price?: EntryFieldTypes.Integer;
  siteDirector?: EntryFieldTypes.EntryLink<TypeModuleSiteDirectorSkeleton>;
  leagueOperations?: EntryFieldTypes.RichText;
}

export type TypeMarketingPageProgramSkeleton = EntrySkeletonType<
  TypeMarketingPageProgramFields,
  "marketingPageProgram"
>;
export type TypeMarketingPageProgram<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeMarketingPageProgramSkeleton,
  Modifiers,
  Locales
>;
