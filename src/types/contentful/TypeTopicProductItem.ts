import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTopicProductItemFields {
  productPhoto: EntryFieldTypes.AssetLink;
  productName: EntryFieldTypes.Symbol;
  price: EntryFieldTypes.Number;
  productLink: EntryFieldTypes.Symbol;
}

export type TypeTopicProductItemSkeleton = EntrySkeletonType<TypeTopicProductItemFields, "topicProductItem">;
export type TypeTopicProductItem<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeTopicProductItemSkeleton,
  Modifiers,
  Locales
>;
