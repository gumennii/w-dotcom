import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeLocationsSkeleton } from "./TypeLocations";
import type { TypePeopleSkeleton } from "./TypePeople";

export interface TypeCampFields {
  key?: EntryFieldTypes.Symbol;
  campName: EntryFieldTypes.Symbol;
  programStatus: EntryFieldTypes.Symbol<"Done" | "In Progress" | "In Review" | "Not Started">;
  sports?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
  programGender?: EntryFieldTypes.Symbol<"Boys" | "Coed" | "Girls">;
  season?: EntryFieldTypes.Symbol<"Fall" | "Spring" | "Summer" | "Winter">;
  programLocations?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLocationsSkeleton>>;
  facilityAddress?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLocationsSkeleton>>;
  launchDateGoal?: EntryFieldTypes.Date;
  timezone?: EntryFieldTypes.Symbol;
  expeditedProcessingFee?: EntryFieldTypes.Number;
  expeditedProcessingFeeStartDate?: EntryFieldTypes.Date;
  comboCoupon?: EntryFieldTypes.Symbol;
  siteDirector?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePeopleSkeleton>>;
  allocator?: EntryFieldTypes.Symbol;
  owner?: EntryFieldTypes.Symbol;
  notes?: EntryFieldTypes.Text;
  additionalPurchases?: EntryFieldTypes.Object;
  segment?: EntryFieldTypes.Object;
  scheduleNotes?: EntryFieldTypes.Text;
  programContactEmails?: EntryFieldTypes.Text;
  lastUpdatedBy?: EntryFieldTypes.Symbol;
  selectExpeditedProcessingFeeStartDate?: EntryFieldTypes.Symbol;
  departmentKey?: EntryFieldTypes.Symbol;
}

export type TypeCampSkeleton = EntrySkeletonType<TypeCampFields, "camp">;
export type TypeCamp<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeCampSkeleton,
  Modifiers,
  Locales
>;
