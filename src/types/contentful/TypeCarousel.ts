import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCarouselFields {
  carouselImage: EntryFieldTypes.AssetLink;
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
}

export type TypeCarouselSkeleton = EntrySkeletonType<TypeCarouselFields, "carousel">;
export type TypeCarousel<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeCarouselSkeleton,
  Modifiers,
  Locales
>;
