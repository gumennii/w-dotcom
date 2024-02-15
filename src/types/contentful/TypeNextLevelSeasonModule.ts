import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeNextLevelSeasonModuleFields {
  seasonTitle: EntryFieldTypes.Symbol;
  coverVideo: EntryFieldTypes.AssetLink;
}

export type TypeNextLevelSeasonModuleSkeleton = EntrySkeletonType<
  TypeNextLevelSeasonModuleFields,
  "nextLevelSeasonModule"
>;
export type TypeNextLevelSeasonModule<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeNextLevelSeasonModuleSkeleton,
  Modifiers,
  Locales
>;
