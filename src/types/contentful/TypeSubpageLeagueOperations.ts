import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeModuleLeagueOperationsSkeleton } from "./TypeModuleLeagueOperations";
import type { TypeModuleSiteDirectorSkeleton } from "./TypeModuleSiteDirector";

export interface TypeSubpageLeagueOperationsFields {
  defaultEntryTitle: EntryFieldTypes.Symbol;
  leagueOperationsSections: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeModuleLeagueOperationsSkeleton | TypeModuleSiteDirectorSkeleton>
  >;
}

export type TypeSubpageLeagueOperationsSkeleton = EntrySkeletonType<
  TypeSubpageLeagueOperationsFields,
  "subpageLeagueOperations"
>;
export type TypeSubpageLeagueOperations<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeSubpageLeagueOperationsSkeleton,
  Modifiers,
  Locales
>;
