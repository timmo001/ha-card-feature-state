export interface StateCardFeatureConfig {
  type: "state";
  state_content?: string;
  target_font_size?: 12 | 14 | 16 | 20 | 24 | 28 | number;
  font_weight?: 300 | 400 | 500 | 700 | number;
}

export interface LovelaceCardFeatureContext {
  entity_id?: string;
  area_id?: string;
}
