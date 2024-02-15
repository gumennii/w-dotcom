import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTeamPlayerSkeleton } from "./TypeTeamPlayer";
import type { TypeTopicCoachSkeleton } from "./TypeTopicCoach";
import type { TypeTopicGameScheduleSkeleton } from "./TypeTopicGameSchedule";
import type { TypeTopicPracticeScheduleSkeleton } from "./TypeTopicPracticeSchedule";
import type { TypeTopicTeamStandingSkeleton } from "./TypeTopicTeamStanding";

export interface TypeTeamFields {
  teamIcon: EntryFieldTypes.AssetLink;
  teamName: EntryFieldTypes.Symbol;
  coach: EntryFieldTypes.EntryLink<TypeTopicCoachSkeleton>;
  teamPlayers: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTeamPlayerSkeleton>>;
  schedule: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeTopicGameScheduleSkeleton | TypeTopicPracticeScheduleSkeleton>
  >;
  teamStanding: EntryFieldTypes.EntryLink<TypeTopicTeamStandingSkeleton>;
}

export type TypeTeamSkeleton = EntrySkeletonType<TypeTeamFields, "team">;
export type TypeTeam<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeTeamSkeleton,
  Modifiers,
  Locales
>;
