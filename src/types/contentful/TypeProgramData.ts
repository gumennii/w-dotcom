import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeLocationsSkeleton } from "./TypeLocations";
import type { TypePeopleSkeleton } from "./TypePeople";

export interface TypeProgramDataFields {
  programName: EntryFieldTypes.Symbol;
  programKey?: EntryFieldTypes.Symbol;
  departmentKey?: EntryFieldTypes.Symbol;
  owner?: EntryFieldTypes.Symbol;
  allocator?: EntryFieldTypes.Symbol;
  programType?: EntryFieldTypes.Symbol<"Basketball" | "Camps" | "Flag Football" | "Volleyball">;
  programLength?: EntryFieldTypes.Integer;
  programCost?: EntryFieldTypes.Number;
  schedule?: EntryFieldTypes.Object;
  scheduleNotes?: EntryFieldTypes.Text;
  divisions?: EntryFieldTypes.Object;
  notes?: EntryFieldTypes.Text;
  address?: EntryFieldTypes.Symbol;
  lastUpdatedBy?: EntryFieldTypes.Symbol;
  timezone?: EntryFieldTypes.Symbol;
  earlyBird?: EntryFieldTypes.Number;
  season?: EntryFieldTypes.Symbol<"Fall" | "Spring" | "Summer" | "Winter">;
  programStatus: EntryFieldTypes.Symbol<"Cancelled" | "Done" | "In Progress" | "In Review" | "Not Started">;
  earlyBirdPriceEndDate?: EntryFieldTypes.Date;
  siteDirector?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePeopleSkeleton>>;
  programLocations?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLocationsSkeleton>>;
  programContactEmails?: EntryFieldTypes.Text;
  facilityAddress?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLocationsSkeleton>>;
  programGender?: EntryFieldTypes.Symbol<"Boys" | "Coed" | "Girls">;
  unfrmOptEnrichmentTag?: EntryFieldTypes.Object;
  unfrmOptPersonalizationCriteria?: EntryFieldTypes.Object;
  teamHierarchy?: EntryFieldTypes.Symbol;
  programLaunchDate?: EntryFieldTypes.Date;
  registrationType?: EntryFieldTypes.Symbol;
}

export type TypeProgramDataSkeleton = EntrySkeletonType<TypeProgramDataFields, "programData">;
export type TypeProgramData<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeProgramDataSkeleton,
  Modifiers,
  Locales
>;
