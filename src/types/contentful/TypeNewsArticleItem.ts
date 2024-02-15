import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeNewsArticleItemFields {
  publishDate: EntryFieldTypes.Date;
  articleTitle: EntryFieldTypes.Symbol;
  excerpt: EntryFieldTypes.Text;
  articleBody: EntryFieldTypes.RichText;
}

export type TypeNewsArticleItemSkeleton = EntrySkeletonType<TypeNewsArticleItemFields, "newsArticleItem">;
export type TypeNewsArticleItem<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeNewsArticleItemSkeleton,
  Modifiers,
  Locales
>;
