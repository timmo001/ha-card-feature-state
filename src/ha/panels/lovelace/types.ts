import type { HassEntity } from "home-assistant-js-websocket";
import type { HomeAssistant, LovelaceCardFeatureConfig } from "../../types";
import type { LovelaceCardFeatureContext } from "./card-features/types";

export interface LovelaceGenericElementEditor extends HTMLElement {
  hass?: HomeAssistant;
  lovelace?: unknown;
  context?: LovelaceCardFeatureContext;
  setConfig(config: unknown): void;
  focusYamlEditor?(): void;
}

export interface LovelaceCardFeature extends HTMLElement {
  hass?: HomeAssistant;
  /** @deprecated Use `context` instead */
  stateObj?: HassEntity;
  context?: LovelaceCardFeatureContext;
  setConfig(config: LovelaceCardFeatureConfig): void;
}

export interface LovelaceCardFeatureEditor extends LovelaceGenericElementEditor {
  setConfig(config: LovelaceCardFeatureConfig): void;
}
