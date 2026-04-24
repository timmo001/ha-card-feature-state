import type { HTMLTemplateResult } from "lit";

export type LocalizeFunc<Keys extends string = string> = (
  key: Keys,
  values?: Record<
    string,
    string | number | HTMLTemplateResult | null | undefined
  >
) => string;
