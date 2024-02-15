import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTopicSpecialExternalLinksFields {
  internalName: EntryFieldTypes.Symbol;
  iconImage?: EntryFieldTypes.AssetLink;
  slug?: EntryFieldTypes.Symbol;
  externalLink?: EntryFieldTypes.Symbol;
  buttonlinkText: EntryFieldTypes.Symbol;
  navigationSubMenu?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTopicSpecialExternalLinksSkeleton>>;
}

export type TypeTopicSpecialExternalLinksSkeleton = EntrySkeletonType<
  TypeTopicSpecialExternalLinksFields,
  "topicSpecialExternalLinks"
>;
export type TypeTopicSpecialExternalLinks<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeTopicSpecialExternalLinksSkeleton,
  Modifiers,
  Locales
>;
