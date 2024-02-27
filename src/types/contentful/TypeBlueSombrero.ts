import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePeopleSkeleton } from "./TypePeople";
import type { TypeProgramDataSkeleton } from "./TypeProgramData";

export interface TypeBlueSombreroFields {
  sport: EntryFieldTypes.Symbol<"Basketball" | "Flag Football" | "Volleyball">;
  season?: EntryFieldTypes.Symbol<"Fall" | "Spring" | "Summer" | "Winter">;
  key: EntryFieldTypes.Symbol;
  pageUrl?: EntryFieldTypes.Symbol;
  openRegistration?: EntryFieldTypes.Boolean;
  enrollment: EntryFieldTypes.Symbol<"Closed" | "Coming Soon" | "Open">;
  coverImage: EntryFieldTypes.AssetLink;
  announcement?: EntryFieldTypes.Text;
  headline?: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.Text;
  vimeoID?: EntryFieldTypes.Symbol;
  operationOverview?: EntryFieldTypes.Text;
  practiceTime?: EntryFieldTypes.Text;
  gameSchedule?: EntryFieldTypes.Object;
  scheduleNote?: EntryFieldTypes.Text;
  additionalInformation?: EntryFieldTypes.Text;
  directorName: EntryFieldTypes.Symbol;
  directorBio: EntryFieldTypes.Text;
  siteDirector?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePeopleSkeleton>>;
  program?: EntryFieldTypes.EntryLink<TypeProgramDataSkeleton>;
  facilityPageUrl?: EntryFieldTypes.Symbol;
  facility?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

export type TypeBlueSombreroSkeleton = EntrySkeletonType<TypeBlueSombreroFields, "blueSombrero">;
export type TypeBlueSombrero<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeBlueSombreroSkeleton,
  Modifiers,
  Locales
>;
