import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSeoMetadataFields {
  internalName?: EntryFieldTypes.Symbol;
  seoTitle: EntryFieldTypes.Symbol;
  seoDescription: EntryFieldTypes.Symbol;
  canonicalUrl?: EntryFieldTypes.Symbol;
  featuredImage?: EntryFieldTypes.AssetLink;
  hidePageSearchEngines?: EntryFieldTypes.Boolean;
  excludeLinksFromSearchRankings?: EntryFieldTypes.Boolean;
}

export type TypeSeoMetadataSkeleton = EntrySkeletonType<TypeSeoMetadataFields, "seoMetadata">;
export type TypeSeoMetadata<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeSeoMetadataSkeleton,
  Modifiers,
  Locales
>;
