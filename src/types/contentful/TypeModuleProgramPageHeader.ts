import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeProgramTopicSkeleton } from "./TypeProgramTopic";
import type { TypeTopicLeagueSkeleton } from "./TypeTopicLeague";
import type { TypeTopicSpecialExternalLinksSkeleton } from "./TypeTopicSpecialExternalLinks";

export interface TypeModuleProgramPageHeaderFields {
  defaultEntryTitle: EntryFieldTypes.Symbol;
  programTitle: EntryFieldTypes.EntryLink<TypeProgramTopicSkeleton>;
  school: EntryFieldTypes.EntryLink<TypeTopicLeagueSkeleton>;
  ctaButton: EntryFieldTypes.EntryLink<TypeTopicSpecialExternalLinksSkeleton>;
}

export type TypeModuleProgramPageHeaderSkeleton = EntrySkeletonType<
  TypeModuleProgramPageHeaderFields,
  "moduleProgramPageHeader"
>;
export type TypeModuleProgramPageHeader<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeModuleProgramPageHeaderSkeleton,
  Modifiers,
  Locales
>;
