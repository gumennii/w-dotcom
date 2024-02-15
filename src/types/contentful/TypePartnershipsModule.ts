import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNextLevelPartnersSkeleton } from "./TypeNextLevelPartners";

export interface TypePartnershipsModuleFields {
  title: EntryFieldTypes.Symbol;
  partnerships: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNextLevelPartnersSkeleton>>;
}

export type TypePartnershipsModuleSkeleton = EntrySkeletonType<TypePartnershipsModuleFields, "partnershipsModule">;
export type TypePartnershipsModule<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypePartnershipsModuleSkeleton,
  Modifiers,
  Locales
>;
