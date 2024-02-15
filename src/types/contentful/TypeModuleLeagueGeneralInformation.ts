import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTopicLeagueSkeleton } from "./TypeTopicLeague";

export interface TypeModuleLeagueGeneralInformationFields {
  defaultEntryTitle: EntryFieldTypes.Symbol;
  coverImage: EntryFieldTypes.AssetLink;
  leagueGeneralInformation: EntryFieldTypes.EntryLink<TypeTopicLeagueSkeleton>;
}

export type TypeModuleLeagueGeneralInformationSkeleton = EntrySkeletonType<
  TypeModuleLeagueGeneralInformationFields,
  "moduleLeagueGeneralInformation"
>;
export type TypeModuleLeagueGeneralInformation<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeModuleLeagueGeneralInformationSkeleton,
  Modifiers,
  Locales
>;
