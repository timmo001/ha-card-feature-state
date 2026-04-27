import type { HassEntity } from "home-assistant-js-websocket";

export type FormatEntityStateFunc = (
  stateObj: HassEntity,
  state?: string
) => string;

export type FormatEntityAttributeValueFunc = (
  stateObj: HassEntity,
  attribute: string,
  value?: any
) => string;

export type FormatEntityAttributeNameFunc = (
  stateObj: HassEntity,
  attribute: string
) => string;

type EntityNameType = "entity" | "device" | "area" | "floor";

export type FormatEntityNameFunc = (
  stateObj: HassEntity,
  options?: { type?: EntityNameType }
) => string;
