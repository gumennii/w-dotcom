import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSummerCampFields {
  openRegistration?: EntryFieldTypes.Boolean;
  key: EntryFieldTypes.Symbol;
  coverImage: EntryFieldTypes.AssetLink;
  headline: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  siteLogistic: EntryFieldTypes.Text;
  directorName: EntryFieldTypes.Symbol;
  directorBio: EntryFieldTypes.Text;
  pageUrl?: EntryFieldTypes.Symbol;
}

export type TypeSummerCampSkeleton = EntrySkeletonType<TypeSummerCampFields, "summerCamp">;
export type TypeSummerCamp<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeSummerCampSkeleton,
  Modifiers,
  Locales
>;
