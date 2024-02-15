import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTopicSiteDirectorSkeleton } from "./TypeTopicSiteDirector";

export interface TypeModuleSiteDirectorFields {
  siteDirector: EntryFieldTypes.Symbol;
  siteDirectorDetails: EntryFieldTypes.EntryLink<TypeTopicSiteDirectorSkeleton>;
}

export type TypeModuleSiteDirectorSkeleton = EntrySkeletonType<TypeModuleSiteDirectorFields, "moduleSiteDirector">;
export type TypeModuleSiteDirector<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeModuleSiteDirectorSkeleton,
  Modifiers,
  Locales
>;
