import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeModelSocialItemSkeleton } from "./TypeModelSocialItem";

export interface TypeWebsiteModuleContactsFields {
  companyName: EntryFieldTypes.Symbol;
  email: EntryFieldTypes.Symbol;
  address?: EntryFieldTypes.Symbol;
  socialLinks: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeModelSocialItemSkeleton>>;
  copyrightNotice: EntryFieldTypes.Symbol;
}

export type TypeWebsiteModuleContactsSkeleton = EntrySkeletonType<
  TypeWebsiteModuleContactsFields,
  "websiteModuleContacts"
>;
export type TypeWebsiteModuleContacts<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeWebsiteModuleContactsSkeleton, Modifiers, Locales>;
