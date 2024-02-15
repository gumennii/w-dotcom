import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTopicTeamStandingFields {
  teamName: EntryFieldTypes.Symbol;
  rank: EntryFieldTypes.Integer;
  wins: EntryFieldTypes.Integer;
  losses: EntryFieldTypes.Integer;
  ties: EntryFieldTypes.Integer;
  winPercentage: EntryFieldTypes.Integer;
}

export type TypeTopicTeamStandingSkeleton = EntrySkeletonType<TypeTopicTeamStandingFields, "topicTeamStanding">;
export type TypeTopicTeamStanding<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeTopicTeamStandingSkeleton,
  Modifiers,
  Locales
>;
