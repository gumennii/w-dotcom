import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTopicGameScheduleSkeleton } from "./TypeTopicGameSchedule";

export interface TypeModuleGameScheduleFields {
  gameSchedule: EntryFieldTypes.Symbol;
  gameScheduleTimeTable: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTopicGameScheduleSkeleton>>;
  notes: EntryFieldTypes.RichText;
}

export type TypeModuleGameScheduleSkeleton = EntrySkeletonType<TypeModuleGameScheduleFields, "moduleGameSchedule">;
export type TypeModuleGameSchedule<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeModuleGameScheduleSkeleton,
  Modifiers,
  Locales
>;
