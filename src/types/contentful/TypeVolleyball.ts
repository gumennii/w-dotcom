import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeVolleyballFields {
  openRegistration?: EntryFieldTypes.Boolean;
  entryTitle?: EntryFieldTypes.Symbol;
  pageUrl: EntryFieldTypes.Symbol;
  coverImage?: EntryFieldTypes.AssetLink;
  headline?: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.RichText;
  vimeovideo?: EntryFieldTypes.Symbol;
  leagueOperations?: EntryFieldTypes.RichText;
  times?: EntryFieldTypes.RichText;
  gameSchedule?: EntryFieldTypes.Object;
  scheduleNote?: EntryFieldTypes.RichText;
  siteDirectorName?: EntryFieldTypes.Symbol;
  siteDirectorBiography?: EntryFieldTypes.RichText;
}

export type TypeVolleyballSkeleton = EntrySkeletonType<TypeVolleyballFields, "volleyball">;
export type TypeVolleyball<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeVolleyballSkeleton,
  Modifiers,
  Locales
>;
