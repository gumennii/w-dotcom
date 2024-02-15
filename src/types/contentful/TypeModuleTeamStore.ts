import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTopicProductItemSkeleton } from "./TypeTopicProductItem";
import type { TypeTopicSpecialExternalLinksSkeleton } from "./TypeTopicSpecialExternalLinks";

export interface TypeModuleTeamStoreFields {
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  teamStoreLink: EntryFieldTypes.EntryLink<TypeTopicSpecialExternalLinksSkeleton>;
  productGrid: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTopicProductItemSkeleton>>;
}

export type TypeModuleTeamStoreSkeleton = EntrySkeletonType<TypeModuleTeamStoreFields, "moduleTeamStore">;
export type TypeModuleTeamStore<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeModuleTeamStoreSkeleton,
  Modifiers,
  Locales
>;
