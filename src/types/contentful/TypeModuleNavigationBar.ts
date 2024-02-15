import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTopicSpecialExternalLinksSkeleton } from "./TypeTopicSpecialExternalLinks";

export interface TypeModuleNavigationBarFields {
  internalName: EntryFieldTypes.Symbol;
  companyLogo: EntryFieldTypes.AssetLink;
  navigationLinks: EntryFieldTypes.EntryLink<TypeTopicSpecialExternalLinksSkeleton>;
}

export type TypeModuleNavigationBarSkeleton = EntrySkeletonType<TypeModuleNavigationBarFields, "moduleNavigationBar">;
export type TypeModuleNavigationBar<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeModuleNavigationBarSkeleton,
  Modifiers,
  Locales
>;
