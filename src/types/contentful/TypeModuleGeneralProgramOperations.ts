import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTopicSpecialExternalLinksSkeleton } from "./TypeTopicSpecialExternalLinks";

export interface TypeModuleGeneralProgramOperationsFields {
  coverVideo: EntryFieldTypes.AssetLink;
  generalProgramTitle: EntryFieldTypes.Symbol;
  generalProgramInformationDescription: EntryFieldTypes.Text;
  ctaButton: EntryFieldTypes.EntryLink<TypeTopicSpecialExternalLinksSkeleton>;
}

export type TypeModuleGeneralProgramOperationsSkeleton = EntrySkeletonType<
  TypeModuleGeneralProgramOperationsFields,
  "moduleGeneralProgramOperations"
>;
export type TypeModuleGeneralProgramOperations<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeModuleGeneralProgramOperationsSkeleton,
  Modifiers,
  Locales
>;
