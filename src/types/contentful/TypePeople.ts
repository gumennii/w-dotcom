import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePeopleFields {
  name?: EntryFieldTypes.Symbol;
  key?: EntryFieldTypes.Symbol;
  email?: EntryFieldTypes.Symbol;
  phone?: EntryFieldTypes.Symbol;
  photo?: EntryFieldTypes.AssetLink;
  biography?: EntryFieldTypes.Text;
  homeAddress?: EntryFieldTypes.Symbol;
  mailingAddress?: EntryFieldTypes.Symbol;
  programType?: EntryFieldTypes.Array<
    EntryFieldTypes.Symbol<
      | "Athletic Performance"
      | "Baseball"
      | "Basketball"
      | "Camps"
      | "Field Hockey"
      | "Flag Football"
      | "Lacrosse"
      | "Other"
      | "Padded Football"
      | "Soccer"
      | "Volleyball"
    >
  >;
}

export type TypePeopleSkeleton = EntrySkeletonType<TypePeopleFields, "people">;
export type TypePeople<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypePeopleSkeleton,
  Modifiers,
  Locales
>;
