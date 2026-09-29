import type { LovelaceCardFeatureConfig } from "../../../types";

export interface StateCardFeatureConfig extends LovelaceCardFeatureConfig {
  state_content?: string;
  target_font_size?: number;
  font_weight?: number;
}

export interface LovelaceCardFeatureContext {
  entity_id?: string;
  area_id?: string;
}
