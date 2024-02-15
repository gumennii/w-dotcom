import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeProgramTopicSkeleton } from "./TypeProgramTopic";

export interface TypeModuleNextLevelProgramsFields {
  title: EntryFieldTypes.Symbol;
  programs: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeProgramTopicSkeleton>>;
}

export type TypeModuleNextLevelProgramsSkeleton = EntrySkeletonType<
  TypeModuleNextLevelProgramsFields,
  "moduleNextLevelPrograms"
>;
export type TypeModuleNextLevelPrograms<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeModuleNextLevelProgramsSkeleton,
  Modifiers,
  Locales
>;
