import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeClinicPageFields {
  slug: EntryFieldTypes.Symbol;
  title?: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.RichText;
  info?: EntryFieldTypes.RichText;
  referentName?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypeClinicPageSkeleton = EntrySkeletonType<TypeClinicPageFields, "clinicPage">;
export type TypeClinicPage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeClinicPageSkeleton,
  Modifiers,
  Locales
>;
