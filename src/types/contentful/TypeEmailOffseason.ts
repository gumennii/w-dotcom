import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeEmailOffseasonFields {
  heroImage?: EntryFieldTypes.AssetLink;
  intro?: EntryFieldTypes.Text;
  programData?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

export type TypeEmailOffseasonSkeleton = EntrySkeletonType<TypeEmailOffseasonFields, "emailOffseason">;
export type TypeEmailOffseason<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeEmailOffseasonSkeleton,
  Modifiers,
  Locales
>;
