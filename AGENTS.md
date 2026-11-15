# State Card Feature

A Home Assistant tile card feature (`custom:hui-state-card-feature`) that renders an entity's state with `state-display`. It's a Lit and TypeScript component in `src/card/ha-card-feature-state.ts`, built with rolldown into `dist/ha-card-feature-state.js` and distributed through HACS.

## Stack

- pnpm, pinned by `packageManager` in `package.json` and by `mise.toml`, with `pnpm-lock.yaml`. Keep pnpm, not Bun.
- Lit and `home-assistant-js-websocket` at runtime
- rolldown for the build, and TypeScript for types
- oxlint with `@timmo001/oxlint-rules` (`oxlint.config.ts`) and Prettier
- mise pins the tools and tasks (`mise.toml`, locked in `mise.lock`), and an hk pre-push hook (`hk.pkl`) runs the lint task and the shared lints

## Checks

- `mise run check` runs lint, the format check and the build. Run it before pushing.
- `mise run format` formats with Prettier. Run it before committing.
- `pnpm test` runs Vitest. There are no tests yet.
- `mise run build` writes `dist/`. Don't edit `dist/` by hand.
- `pnpm publish-to-local` pushes a build to a running Home Assistant over SSH. Only run it when asked.

## Rollout

- Pull requests and pushes to `main` run the Lint, Build and HACS Validate workflows from `timmo001/workflows`.
- Publishing a GitHub release runs the shared release workflow, which attaches the built card with provenance.
- Work on the current branch. Commit and push only when asked.
