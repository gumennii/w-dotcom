import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTopicParentSkeleton } from "./TypeTopicParent";

export interface TypeTeamPlayerFields {
  playerName: EntryFieldTypes.Symbol;
  playerAvatar?: EntryFieldTypes.AssetLink;
  parentalContact?: EntryFieldTypes.EntryLink<TypeTopicParentSkeleton>;
  accountEmail: EntryFieldTypes.Symbol;
}

export type TypeTeamPlayerSkeleton = EntrySkeletonType<TypeTeamPlayerFields, "teamPlayer">;
export type TypeTeamPlayer<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeTeamPlayerSkeleton,
  Modifiers,
  Locales
>;
