import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTopicLeagueOperationDetailSkeleton } from "./TypeTopicLeagueOperationDetail";

export interface TypeModuleLeagueOperationsFields {
  leagueOperations: EntryFieldTypes.Symbol;
  leagueOperationDetails?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTopicLeagueOperationDetailSkeleton>>;
}

export type TypeModuleLeagueOperationsSkeleton = EntrySkeletonType<
  TypeModuleLeagueOperationsFields,
  "moduleLeagueOperations"
>;
export type TypeModuleLeagueOperations<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeModuleLeagueOperationsSkeleton,
  Modifiers,
  Locales
>;
