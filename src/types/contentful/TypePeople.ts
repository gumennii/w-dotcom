import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePeopleFields {
  name?: EntryFieldTypes.Symbol;
  email?: EntryFieldTypes.Symbol;
  secondaryEmail?: EntryFieldTypes.Symbol;
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
  shirtSize?: EntryFieldTypes.Symbol<"A2XL" | "A3XL" | "AL" | "AM" | "AS" | "AXL">;
  jacketSize?: EntryFieldTypes.Symbol<"A2XL" | "A3XL" | "AL" | "AM" | "AS" | "AXL">;
  folderUrl?: EntryFieldTypes.Symbol;
  department?: EntryFieldTypes.Symbol;
  role?: EntryFieldTypes.Symbol<"Asst. Site Director" | "Site Director">;
}

export type TypePeopleSkeleton = EntrySkeletonType<TypePeopleFields, "people">;
export type TypePeople<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypePeopleSkeleton,
  Modifiers,
  Locales
>;
