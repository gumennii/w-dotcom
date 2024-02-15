import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTopicLeagueSkeleton } from "./TypeTopicLeague";

export interface TypeSiteLocationsFields {
  stateArea: EntryFieldTypes.Symbol;
  location: EntryFieldTypes.Symbol;
  locationPin: EntryFieldTypes.Location;
  league: EntryFieldTypes.EntryLink<TypeTopicLeagueSkeleton>;
}

export type TypeSiteLocationsSkeleton = EntrySkeletonType<TypeSiteLocationsFields, "siteLocations">;
export type TypeSiteLocations<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeSiteLocationsSkeleton,
  Modifiers,
  Locales
>;
