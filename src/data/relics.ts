export type RelicRarity =
  | "common"
  | "uncommon"
  | "rare"
  | "centrepiece";

export type SpoilerLevel =
  | "none"
  | "extended"
  | "major";

export interface Relic {
  id: string;
  slug: string;
  collectionNumber: number;
  name: string;
  civilisationSlug: string;
  category: string;
  rarity: RelicRarity;
  systemImageName: string;
  appDescription: string;
  archiveEntry: string;
  curatorNote: string;
  historicalInterpretation: string;
  relatedRelicIds: string[];
  routeHint?: string;
  artworkKey: string;
  altText: string;
  socialCaption?: string;
  spoilerLevel: SpoilerLevel;
}

export const relics: Relic[] = [];

export function getRelic(slug: string): Relic | undefined {
  return relics.find((relic) => relic.slug === slug);
}

export function getRelicsForCivilisation(
  civilisationSlug: string,
): Relic[] {
  return relics
    .filter((relic) => relic.civilisationSlug === civilisationSlug)
    .sort((first, second) => {
      return first.collectionNumber - second.collectionNumber;
    });
}