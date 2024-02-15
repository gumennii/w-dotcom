import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCarouselSkeleton } from "./TypeCarousel";

export interface TypeCarouselModuleFields {
  internalName: EntryFieldTypes.Symbol;
  carouselItems: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCarouselSkeleton>>;
}

export type TypeCarouselModuleSkeleton = EntrySkeletonType<TypeCarouselModuleFields, "carouselModule">;
export type TypeCarouselModule<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeCarouselModuleSkeleton,
  Modifiers,
  Locales
>;
