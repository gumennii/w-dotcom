import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePolicyFields {
  name: EntryFieldTypes.Symbol;
  text: EntryFieldTypes.RichText;
}

export type TypePolicySkeleton = EntrySkeletonType<TypePolicyFields, "policy">;
export type TypePolicy<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypePolicySkeleton,
  Modifiers,
  Locales
>;
