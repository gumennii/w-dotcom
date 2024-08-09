import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeReferenceClinicPageFields {
  internalName?: EntryFieldTypes.Symbol;
}

export type TypeReferenceClinicPageSkeleton = EntrySkeletonType<TypeReferenceClinicPageFields, "referenceClinicPage">;
export type TypeReferenceClinicPage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeReferenceClinicPageSkeleton,
  Modifiers,
  Locales
>;
