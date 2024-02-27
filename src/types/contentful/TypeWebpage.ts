import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeWebpageFields {
  title?: EntryFieldTypes.Symbol;
  body: EntryFieldTypes.Text;
  vimeoID?: EntryFieldTypes.Symbol;
  pageUrl?: EntryFieldTypes.Symbol;
  key: EntryFieldTypes.Symbol;
}

export type TypeWebpageSkeleton = EntrySkeletonType<TypeWebpageFields, "webpage">;
export type TypeWebpage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeWebpageSkeleton,
  Modifiers,
  Locales
>;
