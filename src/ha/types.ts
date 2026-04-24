import type {
  Connection,
  HassConfig,
  HassEntities,
  HassEntity,
  HassServices,
} from "home-assistant-js-websocket";
import type { FrontendLocaleData } from "./data/translation";
import type { LocalizeFunc } from "./common/translations/localize";
import type {
  FormatEntityAttributeNameFunc,
  FormatEntityAttributeValueFunc,
  FormatEntityNameFunc,
  FormatEntityStateFunc,
} from "./common/translations/entity-state";

export interface EntityRegistryDisplayEntry {
  entity_id: string;
  name?: string;
  icon?: string;
  device_id?: string;
  area_id?: string;
  labels: string[];
  hidden?: boolean;
  entity_category?: "config" | "diagnostic";
  translation_key?: string;
  platform?: string;
  display_precision?: number;
  has_entity_name?: boolean;
}

export interface DeviceRegistryEntry {
  id: string;
  name: string | null;
  area_id: string | null;
  [key: string]: unknown;
}

export interface AreaRegistryEntry {
  area_id: string;
  name: string;
  floor_id: string | null;
  [key: string]: unknown;
}

export interface FloorRegistryEntry {
  floor_id: string;
  name: string;
  [key: string]: unknown;
}

export interface HomeAssistantRegistries {
  entities: Record<string, EntityRegistryDisplayEntry>;
  devices: Record<string, DeviceRegistryEntry>;
  areas: Record<string, AreaRegistryEntry>;
  floors: Record<string, FloorRegistryEntry>;
}

export interface HomeAssistantInternationalization {
  language: string;
  selectedLanguage: string | null;
  locale: FrontendLocaleData;
  localize: LocalizeFunc;
}

export interface HomeAssistantFormatters {
  formatEntityState: FormatEntityStateFunc;
  formatEntityAttributeValue: FormatEntityAttributeValueFunc;
  formatEntityAttributeName: FormatEntityAttributeNameFunc;
  formatEntityName: FormatEntityNameFunc;
}

export interface HomeAssistant
  extends HomeAssistantRegistries,
    HomeAssistantInternationalization,
    HomeAssistantFormatters {
  connection: Connection;
  states: HassEntities;
  services: HassServices;
  config: HassConfig;
}

export interface LovelaceCardFeatureConfig {
  type: string;
}

export interface ValueChangedEvent<T> extends CustomEvent {
  detail: {
    value: T;
  };
}

export type { HassEntity };
