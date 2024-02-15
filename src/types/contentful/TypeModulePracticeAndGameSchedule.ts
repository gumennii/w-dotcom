import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTopicGameScheduleSkeleton } from "./TypeTopicGameSchedule";
import type { TypeTopicPracticeScheduleSkeleton } from "./TypeTopicPracticeSchedule";

export interface TypeModulePracticeAndGameScheduleFields {
  practiceGameTimes: EntryFieldTypes.Symbol;
  practiceGameTimeTable: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeTopicGameScheduleSkeleton | TypeTopicPracticeScheduleSkeleton>
  >;
  notes: EntryFieldTypes.RichText;
}

export type TypeModulePracticeAndGameScheduleSkeleton = EntrySkeletonType<
  TypeModulePracticeAndGameScheduleFields,
  "modulePracticeAndGameSchedule"
>;
export type TypeModulePracticeAndGameSchedule<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeModulePracticeAndGameScheduleSkeleton,
  Modifiers,
  Locales
>;
