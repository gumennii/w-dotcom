import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeModelFaqFields {
  question: EntryFieldTypes.Symbol;
  answer: EntryFieldTypes.Text;
}

export type TypeModelFaqSkeleton = EntrySkeletonType<TypeModelFaqFields, "modelFaq">;
export type TypeModelFaq<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeModelFaqSkeleton,
  Modifiers,
  Locales
>;
