import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeModuleProgramPageHeaderSkeleton } from "./TypeModuleProgramPageHeader";
import type { TypeSubpageLeagueOperationsSkeleton } from "./TypeSubpageLeagueOperations";
import type { TypeSubpageLeagueSchedulesSkeleton } from "./TypeSubpageLeagueSchedules";
import type { TypeSubpageProgramOverviewSkeleton } from "./TypeSubpageProgramOverview";

export interface TypePageProgramPageFields {
  defaultEntryTitle: EntryFieldTypes.Symbol;
  programPageHeader: EntryFieldTypes.EntryLink<TypeModuleProgramPageHeaderSkeleton>;
  programPageSubpages: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<
      TypeSubpageLeagueOperationsSkeleton | TypeSubpageLeagueSchedulesSkeleton | TypeSubpageProgramOverviewSkeleton
    >
  >;
}

export type TypePageProgramPageSkeleton = EntrySkeletonType<TypePageProgramPageFields, "pageProgramPage">;
export type TypePageProgramPage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypePageProgramPageSkeleton,
  Modifiers,
  Locales
>;
