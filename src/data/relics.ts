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
  archiveEntry?: string;
  curatorNote?: string;
  historicalInterpretation?: string;
  relatedRelicIds: string[];
  routeHint?: string;
  artworkKey: string;
  altText: string;
  socialCaption?: string;
  spoilerLevel: SpoilerLevel;
}

type TidebornRelicSeed = Pick<
  Relic,
  | "id"
  | "collectionNumber"
  | "name"
  | "category"
  | "rarity"
  | "systemImageName"
  | "appDescription"
>;

function createTidebornRelic(seed: TidebornRelicSeed): Relic {
  return {
    ...seed,
    slug: seed.id.replaceAll("_", "-"),
    civilisationSlug: "tideborn",
    relatedRelicIds: [],
    artworkKey: seed.id,
    altText: `Archive representation of ${seed.name}.`,
    spoilerLevel: "none",
  };
}

export const relics: Relic[] = [
  createTidebornRelic({
    id: "tideborn_shell_marked_coin",
    collectionNumber: 1,
    name: "Shell-Marked Coin",
    category: "Coin",
    rarity: "common",
    systemImageName: "centsign.circle.fill",
    appDescription:
      "A small market coin stamped with the spiral-shell seal of the Tideborn trading houses.",
  }),

  createTidebornRelic({
    id: "tideborn_coral_inlay_bracelet",
    collectionNumber: 2,
    name: "Coral-Inlay Bracelet",
    category: "Jewellery",
    rarity: "common",
    systemImageName: "link.circle.fill",
    appDescription:
      "A pale metal bracelet decorated with chips of red coral and blue harbour glass.",
  }),

  createTidebornRelic({
    id: "tideborn_mooring_hook",
    collectionNumber: 3,
    name: "Mooring Hook",
    category: "Tool",
    rarity: "common",
    systemImageName: "wrench.and.screwdriver.fill",
    appDescription:
      "A heavy hook used to pull small boats against the stone edges of the floating quays.",
  }),

  createTidebornRelic({
    id: "tideborn_tidelog_tablet",
    collectionNumber: 4,
    name: "Tidelog Tablet",
    category: "Tablet",
    rarity: "common",
    systemImageName: "scroll.fill",
    appDescription:
      "A salt-worn tablet recording tidal intervals, docking windows and harbour closures.",
  }),

  createTidebornRelic({
    id: "tideborn_barnacle_dice",
    collectionNumber: 5,
    name: "Barnacle Dice",
    category: "Household",
    rarity: "common",
    systemImageName: "dice.fill",
    appDescription:
      "A pair of gambling dice recovered inside a shell-encrusted dockside cup.",
  }),

  createTidebornRelic({
    id: "tideborn_fishers_thumb_ring",
    collectionNumber: 6,
    name: "Fisher's Thumb Ring",
    category: "Jewellery",
    rarity: "common",
    systemImageName: "circle.circle.fill",
    appDescription:
      "A broad ring worn to protect the thumb while hauling wet rope and fishing line.",
  }),

  createTidebornRelic({
    id: "tideborn_saltglass_bottle",
    collectionNumber: 7,
    name: "Saltglass Bottle",
    category: "Household",
    rarity: "common",
    systemImageName: "drop.fill",
    appDescription:
      "A cloudy blue bottle whose glass has been permanently roughened by salt exposure.",
  }),

  createTidebornRelic({
    id: "tideborn_dockmasters_whistle",
    collectionNumber: 8,
    name: "Dockmaster's Whistle",
    category: "Tool",
    rarity: "common",
    systemImageName: "bell.fill",
    appDescription:
      "A piercing signal whistle used to organise cargo crews during crowded arrivals.",
  }),

  createTidebornRelic({
    id: "tideborn_eelbone_comb",
    collectionNumber: 9,
    name: "Eelbone Comb",
    category: "Household",
    rarity: "common",
    systemImageName: "sparkles",
    appDescription:
      "An unexpectedly delicate comb carved from the spine of a giant reef eel.",
  }),

  createTidebornRelic({
    id: "tideborn_floodgate_key",
    collectionNumber: 10,
    name: "Floodgate Key",
    category: "Tool",
    rarity: "common",
    systemImageName: "key.fill",
    appDescription:
      "A long iron key once used to operate one of the city district's manual floodgates.",
  }),
    createTidebornRelic({
    id: "tideborn_stormproof_match_case",
    collectionNumber: 11,
    name: "Stormproof Match Case",
    category: "Household",
    rarity: "common",
    systemImageName: "flame.fill",
    appDescription:
      "A wax-sealed case designed to keep a handful of matches dry during violent sea storms.",
  }),

  createTidebornRelic({
    id: "tideborn_cracked_teacup",
    collectionNumber: 12,
    name: "The Unreasonably Fine Teacup",
    category: "Household",
    rarity: "common",
    systemImageName: "cup.and.saucer.fill",
    appDescription:
      "A ridiculously ornate teacup recovered from an otherwise ordinary fisherman's dwelling.",
  }),

  createTidebornRelic({
    id: "tideborn_pilgrim_lamp",
    collectionNumber: 13,
    name: "Pilgrim Lamp",
    category: "Household",
    rarity: "uncommon",
    systemImageName: "lamp.desk.fill",
    appDescription:
      "A compact oil lamp carried by travellers crossing the raised bridges between the outer isles.",
  }),

  createTidebornRelic({
    id: "tideborn_wave_charm",
    collectionNumber: 14,
    name: "Wave Charm",
    category: "Ceremonial Object",
    rarity: "uncommon",
    systemImageName: "drop.circle.fill",
    appDescription:
      "A shrine charm intended to invite calm seas and ensure the return of missing vessels.",
  }),

  createTidebornRelic({
    id: "tideborn_reef_compass",
    collectionNumber: 15,
    name: "Reef Compass",
    category: "Navigation",
    rarity: "uncommon",
    systemImageName: "safari.fill",
    appDescription:
      "A compact navigation instrument used to steer through shallow reef channels before sunrise.",
  }),

  createTidebornRelic({
    id: "tideborn_smugglers_false_tooth",
    collectionNumber: 16,
    name: "Smuggler's False Tooth",
    category: "Jewellery",
    rarity: "uncommon",
    systemImageName: "seal.fill",
    appDescription:
      "A hollow golden tooth containing a rolled scrap of coded shipping instructions.",
  }),

  createTidebornRelic({
    id: "tideborn_moon_tide_calendar",
    collectionNumber: 17,
    name: "Moon-Tide Calendar",
    category: "Tablet",
    rarity: "uncommon",
    systemImageName: "calendar",
    appDescription:
      "A rotating calendar that tracks lunar phases alongside the city's highest expected tides.",
  }),

  createTidebornRelic({
    id: "tideborn_whisper_conch",
    collectionNumber: 18,
    name: "Whisper Conch",
    category: "Ceremonial Object",
    rarity: "uncommon",
    systemImageName: "speaker.wave.2.fill",
    appDescription:
      "A polished conch said to preserve the final sentence spoken into its spiral chamber.",
  }),

  createTidebornRelic({
    id: "tideborn_harbour_bell_clapper",
    collectionNumber: 19,
    name: "Harbour Bell Clapper",
    category: "Mechanical",
    rarity: "uncommon",
    systemImageName: "bell.fill",
    appDescription:
      "The bronze clapper from a warning bell large enough to be heard across several islands.",
  }),

  createTidebornRelic({
    id: "tideborn_pearl_eyed_idol",
    collectionNumber: 20,
    name: "Pearl-Eyed Idol",
    category: "Sculpture",
    rarity: "uncommon",
    systemImageName: "eye.fill",
    appDescription:
      "A squat sea-spirit idol whose oversized pearl eyes follow light around the room.",
  }),
    createTidebornRelic({
    id: "tideborn_captains_lucky_boot",
    collectionNumber: 21,
    name: "Captain's Lucky Boot",
    category: "Household",
    rarity: "uncommon",
    systemImageName: "figure.walk",
    appDescription:
      "A single preserved boot accompanied by seven contradictory accounts of its miraculous powers.",
  }),

  createTidebornRelic({
    id: "tideborn_guard_trident",
    collectionNumber: 22,
    name: "Guard Trident",
    category: "Weapon",
    rarity: "rare",
    systemImageName: "shield.fill",
    appDescription:
      "A ceremonial trident carried by harbour guardians during flood-tide processions and civic musters.",
  }),

  createTidebornRelic({
    id: "tideborn_resonance_engine",
    collectionNumber: 23,
    name: "Resonance Engine",
    category: "Mechanical",
    rarity: "rare",
    systemImageName: "gearshape.2.fill",
    appDescription:
      "A dense mechanical core believed to have powered warning tones beneath the city streets.",
  }),

  createTidebornRelic({
    id: "tideborn_drowned_kings_signet",
    collectionNumber: 24,
    name: "Drowned King's Signet",
    category: "Jewellery",
    rarity: "rare",
    systemImageName: "diamond.fill",
    appDescription:
      "A massive royal signet recovered from a sealed chamber beneath the old council harbour.",
  }),

  createTidebornRelic({
    id: "tideborn_leviathan_scale",
    collectionNumber: 25,
    name: "Leviathan Scale",
    category: "Ceremonial Object",
    rarity: "rare",
    systemImageName: "fish.fill",
    appDescription:
      "A shield-sized scale attributed to a creature absent from every surviving Tideborn record.",
  }),

  createTidebornRelic({
    id: "tideborn_map_of_the_vanished_isle",
    collectionNumber: 26,
    name: "Map of the Vanished Isle",
    category: "Tablet",
    rarity: "rare",
    systemImageName: "map.fill",
    appDescription:
      "A detailed map of an inhabited island that does not appear on any later chart or seabed survey.",
  }),

  createTidebornRelic({
    id: "tideborn_oracles_diving_mask",
    collectionNumber: 27,
    name: "Oracle's Diving Mask",
    category: "Navigation",
    rarity: "rare",
    systemImageName: "binoculars.fill",
    appDescription:
      "A crystal-lensed mask supposedly worn by an oracle who delivered prophecies from beneath the harbour.",
  }),

  createTidebornRelic({
    id: "tideborn_throne_of_tides",
    collectionNumber: 28,
    name: "Throne of Tides",
    category: "Sculpture",
    rarity: "centrepiece",
    systemImageName: "crown.fill",
    appDescription:
      "The shell-stone throne from which the Tideborn council ruled during the civilisation's final century.",
  }),

  createTidebornRelic({
    id: "tideborn_crown_of_the_last_admiral",
    collectionNumber: 29,
    name: "Crown of the Last Admiral",
    category: "Jewellery",
    rarity: "centrepiece",
    systemImageName: "star.circle.fill",
    appDescription:
      "A ceremonial crown of black pearl and stormglass belonging to the commander of the final Tideborn fleet.",
  }),

  createTidebornRelic({
    id: "tideborn_heart_of_the_sunken_city",
    collectionNumber: 30,
    name: "Heart of the Sunken City",
    category: "Mechanical",
    rarity: "centrepiece",
    systemImageName: "building.columns.fill",
    appDescription:
      "An impossible mechanism believed to have regulated the canals, floodgates and foundations of the entire city.",
  }),
];

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