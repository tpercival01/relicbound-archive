export interface Civilisation {
  slug: string;
  name: string;
  shortName: string;
  relicCount: number;
  centrepieceCount: number;
  theme: string;
  introduction: string[];
  routeEnvironments: string[];
}

export const civilisations: Civilisation[] = [
  {
    slug: "tideborn",
    name: "The Tideborn",
    shortName: "Tideborn",
    relicCount: 30,
    centrepieceCount: 3,
    theme: "A drowned maritime civilisation",
    introduction: [
      "The Tideborn built their civilisation across islands, floodgates and floating quays. Their traders crossed enormous distances, while engineers attempted to control the tides beneath their capital.",
      "The city ultimately disappeared beneath the water. Surviving relics disagree on whether this was disaster, sacrifice or deliberate departure.",
    ],
    routeEnvironments: [
      "Rivers",
      "Canals",
      "Bridges",
      "Docks",
      "Fountains",
      "Ponds",
      "Waterside routes",
    ],
  },
  {
    slug: "emberwright-dominion",
    name: "The Emberwright Dominion",
    shortName: "Emberwright",
    relicCount: 25,
    centrepieceCount: 2,
    theme: "An industrial empire of machinery and furnace worship",
    introduction: [
      "The Emberwright Dominion transformed heat into industry, worship and political power. Railways connected immense foundries, while mechanical labourers worked beside human guilds.",
      "Its final trains stopped simultaneously. The ruling class, the furnace priesthood and several major engines then vanished from the historical record.",
    ],
    routeEnvironments: [
      "Railway stations",
      "Rail bridges",
      "Markets",
      "Industrial districts",
      "Workshops",
      "Historic factories",
    ],
  },
  {
    slug: "verdant-choir",
    name: "The Verdant Choir",
    shortName: "Verdant",
    relicCount: 25,
    centrepieceCount: 2,
    theme: "A civilisation cultivated from living organisms",
    introduction: [
      "The Verdant Choir grew its homes, tools and archives from living systems. Trees held property, gardens formed civic districts and entire groves moved according to biological command structures.",
      "The civilisation appears to have been consumed by a final period of uncontrolled growth, although some relics suggest the transformation was intentional.",
    ],
    routeEnvironments: [
      "Parks",
      "Gardens",
      "Woodland",
      "Cemeteries",
      "Commons",
      "Allotments",
      "Nature reserves",
    ],
  },
  {
    slug: "meridian-archive",
    name: "The Meridian Archive",
    shortName: "Meridian",
    relicCount: 25,
    centrepieceCount: 2,
    theme: "A culture determined to catalogue and correct the world",
    introduction: [
      "The Meridian Archive measured everything: citizens, streets, history, celestial motion and possible futures. Its officials treated prophecy as administration and contradiction as clerical failure.",
      "Its surviving records may have predicted the civilisation’s collapse. More disturbingly, they may have caused it.",
    ],
    routeEnvironments: [
      "Museums",
      "Libraries",
      "Universities",
      "Monuments",
      "Civic buildings",
      "Historic squares",
      "Observatories",
    ],
  },
];

export function getCivilisation(
  slug: string,
): Civilisation | undefined {
  return civilisations.find((civilisation) => civilisation.slug === slug);
}