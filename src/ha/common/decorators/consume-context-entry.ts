import { consume } from "@lit/context";
import type { HassEntities, HassEntity } from "home-assistant-js-websocket";
import type { EntityRegistryDisplayEntry, HomeAssistant } from "../../types";
import { entitiesContext, statesContext } from "../../data/context";
import { transform } from "./transform";

interface ConsumeEntryConfig {
  entityIdPath: readonly string[];
}

const resolveAtPath = (host: unknown, path: readonly string[]) => {
  let cur: any = host;
  for (const seg of path) {
    if (cur == null) return undefined;
    cur = cur[seg];
  }
  return cur;
};

const composeDecorator = <T, V>(
  context: Parameters<typeof consume>[0]["context"],
  watchKey: string | undefined,
  select: (this: unknown, value: T) => V | undefined
) => {
  const transformDec = transform<T, V | undefined>({
    transformer: function (this: unknown, value) {
      return select.call(this, value);
    },
    watch: watchKey ? [watchKey] : [],
  });
  const consumeDec = consume<any>({ context, subscribe: true });
  return (proto: any, propertyKey: string) => {
    transformDec(proto, propertyKey);
    consumeDec(proto, propertyKey);
  };
};

/**
 * Consumes `statesContext` and narrows it to the `HassEntity` for the entity
 * ID found at `entityIdPath` on the host.
 */
export const consumeEntityState = (config: ConsumeEntryConfig) =>
  composeDecorator<HassEntities, HassEntity>(
    statesContext,
    config.entityIdPath[0],
    function (states) {
      const id = resolveAtPath(this, config.entityIdPath);
      return typeof id === "string" ? states?.[id] : undefined;
    }
  );

/**
 * Consumes `entitiesContext` and narrows it to the
 * `EntityRegistryDisplayEntry` for the entity ID found at `entityIdPath`.
 */
export const consumeEntityRegistryEntry = (config: ConsumeEntryConfig) =>
  composeDecorator<HomeAssistant["entities"], EntityRegistryDisplayEntry>(
    entitiesContext,
    config.entityIdPath[0],
    function (entities) {
      const id = resolveAtPath(this, config.entityIdPath);
      return typeof id === "string" ? entities?.[id] : undefined;
    }
  );
