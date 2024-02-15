import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTopicSpecialExternalLinksSkeleton } from "./TypeTopicSpecialExternalLinks";

export interface TypeModuleMobileAppsFields {
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  mobileAppMockups: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  appStoreButtons: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTopicSpecialExternalLinksSkeleton>>;
}

export type TypeModuleMobileAppsSkeleton = EntrySkeletonType<TypeModuleMobileAppsFields, "moduleMobileApps">;
export type TypeModuleMobileApps<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeModuleMobileAppsSkeleton,
  Modifiers,
  Locales
>;
