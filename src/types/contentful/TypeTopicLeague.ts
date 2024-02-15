import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTopicDivisionSkeleton } from "./TypeTopicDivision";
import type { TypeTopicLeagueOperationDetailSkeleton } from "./TypeTopicLeagueOperationDetail";
import type { TypeTopicSiteDirectorSkeleton } from "./TypeTopicSiteDirector";

export interface TypeTopicLeagueFields {
  seasonTitle: EntryFieldTypes.Symbol;
  leagueDescription?: EntryFieldTypes.Text;
  school: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  areaLocation: EntryFieldTypes.Symbol;
  address: EntryFieldTypes.Text;
  siteDirector: EntryFieldTypes.EntryLink<TypeTopicSiteDirectorSkeleton>;
  leagueOperations: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTopicLeagueOperationDetailSkeleton>>;
  divisions: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTopicDivisionSkeleton>>;
}

export type TypeTopicLeagueSkeleton = EntrySkeletonType<TypeTopicLeagueFields, "topicLeague">;
export type TypeTopicLeague<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeTopicLeagueSkeleton,
  Modifiers,
  Locales
>;
