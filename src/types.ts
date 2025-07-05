// src/types.ts

/**
 * Interface for a simple link with text and URL.
 */
export interface Link {
  text: string;
  url: string;
}

/**
 * Interface for a section of related links, often with a heading.
 * This is the interface for individual link groups within the 'links' array.
 */
export interface LinksSection {
    title: string;
  urls: Link[]; // <-- This is an array of Link objects. LinksSection does NOT have a 'links' property itself.
}

/**
 * Interface for a major electrical grid interconnection.
 */
export interface GridInterconnectionData {
  title: string;
  description: string;
  colorClass: string; // Tailwind class for background color
  icon: string; // Emoji
}

/**
 * Interface for a key entity operating or using the grid (Generators, T&D, ISOs, etc.).
 */
export interface GridEntityData {
    title: string;
      description: string;

    icon: string; // Emoji
  links?: LinksSection[]; // Optional array of LinksSection objects

  // New optional properties specifically for Power Generators (or similar detailed entities)
generatorTypes?: string[];
  fuelSources?: string[];
  dispatchability?: string;
  typicalCapacity?: string;
  environmentalNote?: string;
}

/**
 * Interface for a major component of the electrical grid (Generation, Transmission, Distribution).
 */
export interface GridComponentData {
  icon: string; // Emoji
  title: string;
  description: string;
    category: string; // e.g., "Generation", "Transmission", "Distribution"

}


/**
 * Interface for an electricity market type (Regulated vs. Deregulated).
 */
export interface MarketTypeData {
  icon: string; // Emoji
  title: string;
  description: string;
}

/**
 * Interface for a state's electricity market deregulation status.
 */
export interface StateMarketStatusData {
  status: string; // e.g., "Fully Deregulated", "Partially Deregulated", "Fully Regulated"
  icon: string; // Emoji
  states: string[]; // List of states
}



/**
 * Interface for a key entity operating or using the electrical grid.
 * Extended to include specific details for 'Power Generators'.
 */
export interface GridEntityData {
  title: string;
  description: string; // General description for all entities
  icon: string;
  links?: LinksSection[]; // Optional links relevant to the entity

  // New optional properties specifically for Power Generators (or similar detailed entities)
  generatorTypes?: string[]; // e.g., ['Coal', 'Solar PV', 'Wind', 'Hydro']
  fuelSources?: string[]; // e.g., ['Fossil Fuels', 'Renewables', 'Nuclear']
  dispatchability?: string; // e.g., 'Baseload', 'Intermittent', 'Dispatchable'
  typicalCapacity?: string; // e.g., 'MW to GW', 'kW to MW'
  environmentalNote?: string; // e.g., 'Varies by type', 'Zero carbon emissions during operation'
}