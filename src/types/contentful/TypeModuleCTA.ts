import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeModuleCTAFields {
  title: EntryFieldTypes.Symbol;
  headline?: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  ctaTitle?: EntryFieldTypes.Symbol;
  ctaLink?: EntryFieldTypes.Symbol;
  images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypeModuleCTASkeleton = EntrySkeletonType<TypeModuleCTAFields, "moduleCTA">;
export type TypeModuleCTA<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeModuleCTASkeleton,
  Modifiers,
  Locales
>;
