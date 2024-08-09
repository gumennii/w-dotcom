import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSeoMetadataSkeleton } from "./TypeSeoMetadata";
import type { TypeWebsiteModuleFaQsSkeleton } from "./TypeWebsiteModuleFaQs";

export interface TypeClinicPageFields {
  slug: EntryFieldTypes.Symbol;
  seoMetadata: EntryFieldTypes.EntryLink<TypeSeoMetadataSkeleton>;
  title?: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.RichText;
  heroImage: EntryFieldTypes.AssetLink;
  info?: EntryFieldTypes.RichText;
  faQs?: EntryFieldTypes.EntryLink<TypeWebsiteModuleFaQsSkeleton>;
}

export type TypeClinicPageSkeleton = EntrySkeletonType<TypeClinicPageFields, "clinicPage">;
export type TypeClinicPage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeClinicPageSkeleton,
  Modifiers,
  Locales
>;
