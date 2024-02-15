import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeProgramTopicFields {
  programIcon?: EntryFieldTypes.AssetLink;
  programName?: EntryFieldTypes.Symbol;
  programTitle?: EntryFieldTypes.Symbol;
  programPage: EntryFieldTypes.Symbol;
  programDescription?: EntryFieldTypes.Text;
  siteLocations?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
  seasonOperations?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
  additionalProgramInformation?: EntryFieldTypes.RichText;
}

export type TypeProgramTopicSkeleton = EntrySkeletonType<TypeProgramTopicFields, "programTopic">;
export type TypeProgramTopic<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeProgramTopicSkeleton,
  Modifiers,
  Locales
>;
