# State card feature

> [!WARNING]
> This card feature is experimental, and breaking changes may occur.

A custom Home Assistant tile card feature that renders the state of an entity
using `state-display`. Supports selecting any state content key (state,
attributes, last_changed, last_updated, device/area/floor name) and tuning the
target font size and weight.

<img width="1431" height="481" alt="image" src="https://github.com/user-attachments/assets/e80b2bfa-d317-42f3-af2d-1d951d1ac89d" />

## Installation

### HACS (Recommended)

Since this card is not yet in the default HACS store, add it as a custom repository:

1. Open HACS in your Home Assistant instance
2. Click the **3 dots** in the top right corner
3. Select **"Custom repositories"**
4. Add repository URL: `https://github.com/timmo001/ha-card-feature-state`
5. Select category: **Dashboard**
6. Click **"ADD"**
7. Find "State card feature" in the list and click **Download**

### Manual

1. Download `ha-card-feature-state.js` from the latest release
2. Place it in your `config/www` folder
3. Add the resource in your Lovelace dashboard

### Publish to a running Home Assistant (SSH)

Copy `.env.example` to `.env`, set `PUBLISH_TARGET` (and optional `PUBLISH_PORT`), then run:

```bash
pnpm publish-to-local
```

This builds and syncs `dist/ha-card-feature-state.js` to `/config/www/community/ha-card-feature-state/` on the remote.

## Usage

Add the feature to a tile card in YAML:

```yaml
type: tile
entity: sensor.living_room_temperature
features:
  - type: custom:hui-state-card-feature
    state_content: state
    target_font_size: 24
    font_weight: 500
```

### Options

- `state_content` (`string`, optional): which state content key to render.
  Defaults to `state`. Examples: `state`, `last_changed`, `last_updated`,
  `device_name`, `area_name`, `floor_name`, or any attribute name.
- `target_font_size` (`number`, optional): target font size in pixels. Clamped
  between 12 and 28. Defaults to 24.
- `font_weight` (`number`, optional): font weight. One of `300`, `400`, `500`,
  or `700`. Defaults to `500`.
