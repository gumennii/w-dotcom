import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeLocationsFields {
  locationName: EntryFieldTypes.Symbol;
  key?: EntryFieldTypes.Symbol;
  address: EntryFieldTypes.Text;
  contactName?: EntryFieldTypes.Symbol;
  contactPhone?: EntryFieldTypes.Symbol;
  contactEmail?: EntryFieldTypes.Symbol;
  spaces?: EntryFieldTypes.Object;
  programType?: EntryFieldTypes.Symbol<"Basketball" | "Camps" | "Flag Football" | "Volleyball">;
  intro?: EntryFieldTypes.Text;
  logistics?: EntryFieldTypes.Text;
  mapDescription?: EntryFieldTypes.Text;
  map?: EntryFieldTypes.AssetLink;
  arrivalGuidance?: EntryFieldTypes.Text;
}

export type TypeLocationsSkeleton = EntrySkeletonType<TypeLocationsFields, "locations">;
export type TypeLocations<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeLocationsSkeleton,
  Modifiers,
  Locales
>;
