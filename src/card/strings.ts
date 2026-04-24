export const STRINGS = {
  state_content_label: "State content",
  state_content_options: {
    state: "State",
    last_changed: "Last changed",
    last_updated: "Last updated",
    device_name: "Device name",
    area_name: "Area name",
    floor_name: "Floor name",
    remaining_time: "Remaining time",
    install_status: "Install status",
  },
  target_font_size_label: "Target font size",
  target_font_size_mode_preset: "Preset",
  target_font_size_mode_custom: "Custom",
  target_font_size_helper:
    "Sets the target size for the text. The text will still scale down to fit the available space.",
  target_font_size_presets: {
    s: "Small",
    m: "Medium",
    l: "Large",
    xl: "Extra large",
    "2xl": "2X large",
    "3xl": "3X large",
  },
  font_weight_label: "Font weight",
  font_weight_options: {
    300: "Light",
    400: "Normal",
    500: "Medium",
    700: "Bold",
  },
} as const;

export type StateContentOptionKey = keyof typeof STRINGS.state_content_options;
export type FontSizePresetKey = keyof typeof STRINGS.target_font_size_presets;
export type FontWeightKey = keyof typeof STRINGS.font_weight_options;
