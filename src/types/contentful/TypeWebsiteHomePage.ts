import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeMarketingPageProgramSkeleton } from "./TypeMarketingPageProgram";
import type { TypeModuleCTASkeleton } from "./TypeModuleCTA";

export interface TypeWebsiteHomePageFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  coverVideo?: EntryFieldTypes.Symbol;
  carousel?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeMarketingPageProgramSkeleton>>;
  ctaHero?: EntryFieldTypes.EntryLink<TypeModuleCTASkeleton>;
}

export type TypeWebsiteHomePageSkeleton = EntrySkeletonType<TypeWebsiteHomePageFields, "websiteHomePage">;
export type TypeWebsiteHomePage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeWebsiteHomePageSkeleton,
  Modifiers,
  Locales
>;
