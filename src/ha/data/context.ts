import { createContext } from "@lit/context";
import type { HassEntities } from "home-assistant-js-websocket";
import type {
  HomeAssistant,
  HomeAssistantInternationalization,
  HomeAssistantRegistries,
} from "../types";

/**
 * Entity, device, area, and floor registries
 */
export const registriesContext =
  createContext<HomeAssistantRegistries>("hassRegistries");

/**
 * Live map of all entity states, keyed by entity ID.
 */
export const statesContext = createContext<HassEntities>("states");

/**
 * i18n state: active language, locale, translations, and the `localize` function.
 */
export const internationalizationContext =
  createContext<HomeAssistantInternationalization>("hassInternationalization");

/**
 * Map of all entities in the entity registry, keyed by entity ID.
 */
export const entitiesContext =
  createContext<HomeAssistant["entities"]>("entities");
