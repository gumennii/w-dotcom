import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeModelSocialItemFields {
  icon: EntryFieldTypes.AssetLink;
  name: EntryFieldTypes.Symbol;
  url: EntryFieldTypes.Symbol;
}

export type TypeModelSocialItemSkeleton = EntrySkeletonType<TypeModelSocialItemFields, "modelSocialItem">;
export type TypeModelSocialItem<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeModelSocialItemSkeleton,
  Modifiers,
  Locales
>;
