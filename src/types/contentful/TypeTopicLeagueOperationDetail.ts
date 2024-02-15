import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTopicLeagueOperationDetailFields {
  operationTitle: EntryFieldTypes.Symbol;
  operationDetail: EntryFieldTypes.Text;
}

export type TypeTopicLeagueOperationDetailSkeleton = EntrySkeletonType<
  TypeTopicLeagueOperationDetailFields,
  "topicLeagueOperationDetail"
>;
export type TypeTopicLeagueOperationDetail<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeTopicLeagueOperationDetailSkeleton,
  Modifiers,
  Locales
>;
