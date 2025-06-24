// src/types.ts

/**
 * Interface for a simple link with text and URL.
 */
export interface Link {
  title: string;
  url: string;
}

/**
 * Interface for a section of related links, often with a heading.
 */
export interface LinksSection {
  heading: string;
  links: Link[];
}

/**
 * Interface for a major component of the electrical grid (Generation, Transmission, Distribution).
 */
export interface GridComponentData {
  icon: string; // Emoji
  title: string;
  description: string;
}

/**
 * Interface for a key entity operating or using the grid (Generators, T&D, ISOs, etc.).
 */
export interface GridEntityData {
  icon: string; // Emoji
  title: string;
  description: string;
  links?: LinksSection[]; // Optional array of link sections
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