declare global {
  interface HASSDomEvents {}
}

type ValidHassDomEvent = keyof HASSDomEvents;

/**
 * Dispatches a custom event with an optional detail value.
 */
export const fireEvent = <HassEvent extends ValidHassDomEvent>(
  node: HTMLElement | Window,
  type: HassEvent,
  detail?: HASSDomEvents[HassEvent],
  options?: {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
  }
) => {
  options = options || {};

  const event = new CustomEvent(type, {
    detail: detail ?? {},
    bubbles: options.bubbles === undefined ? true : options.bubbles,
    cancelable: Boolean(options.cancelable),
    composed: options.composed === undefined ? true : options.composed,
  });

  node.dispatchEvent(event);

  return event;
};
