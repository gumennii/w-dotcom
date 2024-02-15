import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTopicSpecialExternalLinksSkeleton } from "./TypeTopicSpecialExternalLinks";

export interface TypeAboutNlsModuleFields {
  aboutPhotos: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  title: EntryFieldTypes.Symbol;
  tagline: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  cta: EntryFieldTypes.EntryLink<TypeTopicSpecialExternalLinksSkeleton>;
}

export type TypeAboutNlsModuleSkeleton = EntrySkeletonType<TypeAboutNlsModuleFields, "aboutNlsModule">;
export type TypeAboutNlsModule<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeAboutNlsModuleSkeleton,
  Modifiers,
  Locales
>;
