import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeNextLevelPartnersFields {
  internalName: EntryFieldTypes.Symbol;
  partnerLogo: EntryFieldTypes.AssetLink;
}

export type TypeNextLevelPartnersSkeleton = EntrySkeletonType<TypeNextLevelPartnersFields, "nextLevelPartners">;
export type TypeNextLevelPartners<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeNextLevelPartnersSkeleton,
  Modifiers,
  Locales
>;
