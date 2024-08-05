import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeModelFaqSkeleton } from "./TypeModelFaq";

export interface TypeWebsiteModuleFaQsFields {
  pageTitle?: EntryFieldTypes.Symbol;
  faQs: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeModelFaqSkeleton>>;
}

export type TypeWebsiteModuleFaQsSkeleton = EntrySkeletonType<TypeWebsiteModuleFaQsFields, "websiteModuleFaQs">;
export type TypeWebsiteModuleFaQs<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeWebsiteModuleFaQsSkeleton,
  Modifiers,
  Locales
>;
