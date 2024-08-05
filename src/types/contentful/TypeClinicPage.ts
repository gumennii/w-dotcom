import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeWebsiteModuleContactsSkeleton } from "./TypeWebsiteModuleContacts";
import type { TypeWebsiteModuleFaQsSkeleton } from "./TypeWebsiteModuleFaQs";

export interface TypeClinicPageFields {
  slug: EntryFieldTypes.Symbol;
  referentName?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
  title?: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.RichText;
  heroImage: EntryFieldTypes.AssetLink;
  info?: EntryFieldTypes.RichText;
  faQs?: EntryFieldTypes.EntryLink<TypeWebsiteModuleFaQsSkeleton>;
  contacts: EntryFieldTypes.EntryLink<TypeWebsiteModuleContactsSkeleton>;
}

export type TypeClinicPageSkeleton = EntrySkeletonType<TypeClinicPageFields, "clinicPage">;
export type TypeClinicPage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeClinicPageSkeleton,
  Modifiers,
  Locales
>;
