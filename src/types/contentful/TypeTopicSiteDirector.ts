import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTopicSiteDirectorFields {
  siteDirectorPhoto: EntryFieldTypes.AssetLink;
  siteDirectorName: EntryFieldTypes.Symbol;
  siteDirectorBio: EntryFieldTypes.Text;
}

export type TypeTopicSiteDirectorSkeleton = EntrySkeletonType<TypeTopicSiteDirectorFields, "topicSiteDirector">;
export type TypeTopicSiteDirector<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeTopicSiteDirectorSkeleton,
  Modifiers,
  Locales
>;
