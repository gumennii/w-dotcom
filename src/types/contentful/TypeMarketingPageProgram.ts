import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePeopleSkeleton } from "./TypePeople";
import type { TypeProgramDataSkeleton } from "./TypeProgramData";

export interface TypeMarketingPageProgramFields {
  programName: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  programType: EntryFieldTypes.Symbol<"Basketball" | "Camps" | "Flag Football" | "Volleyball">;
  seasonDescription?: EntryFieldTypes.RichText;
  coverImage?: EntryFieldTypes.AssetLink;
  coverVideo?: EntryFieldTypes.Symbol;
  divisions?: EntryFieldTypes.Object;
  notes?: EntryFieldTypes.RichText;
  schedule?: EntryFieldTypes.Object;
  scheduleNotes?: EntryFieldTypes.RichText;
  price?: EntryFieldTypes.Integer;
  siteDirector?: EntryFieldTypes.EntryLink<TypePeopleSkeleton>;
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
