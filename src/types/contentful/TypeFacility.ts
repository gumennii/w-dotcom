import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeFacilityFields {
  key?: EntryFieldTypes.Symbol;
  programType?: EntryFieldTypes.Symbol<"Basketball" | "Camps" | "Flag Football" | "Volleyball">;
  name?: EntryFieldTypes.Symbol;
  intro?: EntryFieldTypes.Text;
  logistics?: EntryFieldTypes.Text;
  address?: EntryFieldTypes.Symbol;
  mapDescription?: EntryFieldTypes.Text;
  map?: EntryFieldTypes.AssetLink;
  arrivalGuidance?: EntryFieldTypes.Text;
}

export type TypeFacilitySkeleton = EntrySkeletonType<TypeFacilityFields, "facility">;
export type TypeFacility<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeFacilitySkeleton,
  Modifiers,
  Locales
>;
