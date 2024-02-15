import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAboutNlsModuleSkeleton } from "./TypeAboutNlsModule";
import type { TypeCarouselModuleSkeleton } from "./TypeCarouselModule";
import type { TypeModuleMobileAppsSkeleton } from "./TypeModuleMobileApps";
import type { TypeModuleNextLevelProgramsSkeleton } from "./TypeModuleNextLevelPrograms";
import type { TypeModuleTeamStoreSkeleton } from "./TypeModuleTeamStore";
import type { TypeNewsModuleSkeleton } from "./TypeNewsModule";
import type { TypeNextLevelSeasonModuleSkeleton } from "./TypeNextLevelSeasonModule";
import type { TypePartnershipsModuleSkeleton } from "./TypePartnershipsModule";

export interface TypeHomePageFields {
  internalName: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  homePageModules: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<
      | TypeAboutNlsModuleSkeleton
      | TypeCarouselModuleSkeleton
      | TypeModuleMobileAppsSkeleton
      | TypeModuleNextLevelProgramsSkeleton
      | TypeModuleTeamStoreSkeleton
      | TypeNewsModuleSkeleton
      | TypeNextLevelSeasonModuleSkeleton
      | TypePartnershipsModuleSkeleton
    >
  >;
}

export type TypeHomePageSkeleton = EntrySkeletonType<TypeHomePageFields, "homePage">;
export type TypeHomePage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeHomePageSkeleton,
  Modifiers,
  Locales
>;
