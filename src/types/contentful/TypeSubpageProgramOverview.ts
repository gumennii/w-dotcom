import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeModuleGeneralProgramOperationsSkeleton } from "./TypeModuleGeneralProgramOperations";
import type { TypeModuleLeagueGeneralInformationSkeleton } from "./TypeModuleLeagueGeneralInformation";

export interface TypeSubpageProgramOverviewFields {
  defaultEntryTitle: EntryFieldTypes.Symbol;
  programOverviewSections: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeModuleGeneralProgramOperationsSkeleton | TypeModuleLeagueGeneralInformationSkeleton>
  >;
}

export type TypeSubpageProgramOverviewSkeleton = EntrySkeletonType<
  TypeSubpageProgramOverviewFields,
  "subpageProgramOverview"
>;
export type TypeSubpageProgramOverview<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeSubpageProgramOverviewSkeleton,
  Modifiers,
  Locales
>;
