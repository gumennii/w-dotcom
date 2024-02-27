import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeClinicFields {
  key?: EntryFieldTypes.Symbol;
  title?: EntryFieldTypes.Symbol;
  content?: EntryFieldTypes.Text;
}

export type TypeClinicSkeleton = EntrySkeletonType<TypeClinicFields, "clinic">;
export type TypeClinic<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeClinicSkeleton,
  Modifiers,
  Locales
>;
