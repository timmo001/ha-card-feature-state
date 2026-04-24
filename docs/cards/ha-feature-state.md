# State card feature

Use this feature inside a tile card to display a single state content value
(state, attribute, timestamp, device/area/floor name) using `state-display`.

```yaml
type: tile
entity: sensor.living_room_temperature
features:
  - type: custom:hui-state-card-feature
    state_content: state
    target_font_size: 24
    font_weight: 500
```

## Options

- `state_content` (`string`, optional): which state content key to render.
  Defaults to `state`. Examples: `state`, `last_changed`, `last_updated`,
  `device_name`, `area_name`, `floor_name`, or any entity attribute name.
- `target_font_size` (`number`, optional): target font size in pixels. Clamped
  between 12 and 28. Defaults to 24.
- `font_weight` (`number`, optional): font weight. One of `300`, `400`, `500`,
  or `700`. Defaults to `500`.
