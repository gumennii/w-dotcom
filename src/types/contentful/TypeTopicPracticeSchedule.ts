import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSiteLocationsSkeleton } from "./TypeSiteLocations";
import type { TypeTeamPlayerSkeleton } from "./TypeTeamPlayer";

export interface TypeTopicPracticeScheduleFields {
  defaultEntryTitle: EntryFieldTypes.Symbol;
  weekNumber: EntryFieldTypes.Integer;
  dateAndTime: EntryFieldTypes.Date;
  venueAndField: EntryFieldTypes.Symbol;
  location: EntryFieldTypes.Symbol;
  locationPin: EntryFieldTypes.EntryLink<TypeSiteLocationsSkeleton>;
  attendees: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTeamPlayerSkeleton>>;
}

export type TypeTopicPracticeScheduleSkeleton = EntrySkeletonType<
  TypeTopicPracticeScheduleFields,
  "topicPracticeSchedule"
>;
export type TypeTopicPracticeSchedule<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeTopicPracticeScheduleSkeleton,
  Modifiers,
  Locales
>;
