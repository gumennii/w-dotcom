import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSiteLocationsSkeleton } from "./TypeSiteLocations";
import type { TypeTeamSkeleton } from "./TypeTeam";
import type { TypeTeamPlayerSkeleton } from "./TypeTeamPlayer";

export interface TypeTopicGameScheduleFields {
  defaultEntryTitle: EntryFieldTypes.Symbol;
  weekNumber: EntryFieldTypes.Integer;
  teams: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTeamSkeleton>>;
  dateAndTime: EntryFieldTypes.Date;
  venueAndField: EntryFieldTypes.Symbol;
  location: EntryFieldTypes.Symbol;
  locationPin: EntryFieldTypes.EntryLink<TypeSiteLocationsSkeleton>;
  attendees: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTeamPlayerSkeleton>>;
  gameWinner: EntryFieldTypes.EntryLink<TypeTeamSkeleton>;
}

export type TypeTopicGameScheduleSkeleton = EntrySkeletonType<TypeTopicGameScheduleFields, "topicGameSchedule">;
export type TypeTopicGameSchedule<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeTopicGameScheduleSkeleton,
  Modifiers,
  Locales
>;
