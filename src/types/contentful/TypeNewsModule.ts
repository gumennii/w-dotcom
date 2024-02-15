import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNewsArticleItemSkeleton } from "./TypeNewsArticleItem";
import type { TypeTopicSpecialExternalLinksSkeleton } from "./TypeTopicSpecialExternalLinks";

export interface TypeNewsModuleFields {
  title: EntryFieldTypes.Symbol;
  newsExcerpts: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNewsArticleItemSkeleton>>;
  ctaTextLink: EntryFieldTypes.EntryLink<TypeTopicSpecialExternalLinksSkeleton>;
}

export type TypeNewsModuleSkeleton = EntrySkeletonType<TypeNewsModuleFields, "newsModule">;
export type TypeNewsModule<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeNewsModuleSkeleton,
  Modifiers,
  Locales
>;
