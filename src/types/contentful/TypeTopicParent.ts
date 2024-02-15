import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTopicParentFields {
  parentName: EntryFieldTypes.Symbol;
  mobileNumber: EntryFieldTypes.Integer;
  email: EntryFieldTypes.Symbol;
}

export type TypeTopicParentSkeleton = EntrySkeletonType<TypeTopicParentFields, "topicParent">;
export type TypeTopicParent<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeTopicParentSkeleton,
  Modifiers,
  Locales
>;
