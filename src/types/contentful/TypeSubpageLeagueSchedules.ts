import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeModuleGameScheduleSkeleton } from "./TypeModuleGameSchedule";
import type { TypeModulePracticeAndGameScheduleSkeleton } from "./TypeModulePracticeAndGameSchedule";

export interface TypeSubpageLeagueSchedulesFields {
  defaultEntryTitle: EntryFieldTypes.Symbol;
  schedulesSections: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeModuleGameScheduleSkeleton | TypeModulePracticeAndGameScheduleSkeleton>
  >;
}

export type TypeSubpageLeagueSchedulesSkeleton = EntrySkeletonType<
  TypeSubpageLeagueSchedulesFields,
  "subpageLeagueSchedules"
>;
export type TypeSubpageLeagueSchedules<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeSubpageLeagueSchedulesSkeleton,
  Modifiers,
  Locales
>;
