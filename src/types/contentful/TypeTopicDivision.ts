import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTeamSkeleton } from "./TypeTeam";
import type { TypeTopicGameScheduleSkeleton } from "./TypeTopicGameSchedule";
import type { TypeTopicPracticeScheduleSkeleton } from "./TypeTopicPracticeSchedule";
import type { TypeTopicTeamStandingSkeleton } from "./TypeTopicTeamStanding";

export interface TypeTopicDivisionFields {
  divisionName: EntryFieldTypes.Symbol;
  gradeLevel: EntryFieldTypes.Symbol;
  teams: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTeamSkeleton>>;
  schedules: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeTopicGameScheduleSkeleton | TypeTopicPracticeScheduleSkeleton>
  >;
  divisionStandings: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTopicTeamStandingSkeleton>>;
}

export type TypeTopicDivisionSkeleton = EntrySkeletonType<TypeTopicDivisionFields, "topicDivision">;
export type TypeTopicDivision<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeTopicDivisionSkeleton,
  Modifiers,
  Locales
>;
