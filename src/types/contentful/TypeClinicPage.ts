import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeClinicPageFields {
  slug: EntryFieldTypes.Symbol;
  referentName?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
  title?: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.RichText;
  info?: EntryFieldTypes.RichText;
}

export type TypeClinicPageSkeleton = EntrySkeletonType<TypeClinicPageFields, "clinicPage">;
export type TypeClinicPage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeClinicPageSkeleton,
  Modifiers,
  Locales
>;
