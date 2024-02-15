import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTopicCoachFields {
  coachName: EntryFieldTypes.Symbol;
  coachAvatar: EntryFieldTypes.AssetLink;
  accountEmail: EntryFieldTypes.Symbol;
  designation: EntryFieldTypes.Symbol<"Parent Coach" | "Student Coach">;
}

export type TypeTopicCoachSkeleton = EntrySkeletonType<TypeTopicCoachFields, "topicCoach">;
export type TypeTopicCoach<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeTopicCoachSkeleton,
  Modifiers,
  Locales
>;
