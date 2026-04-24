export const STATE_DISPLAY_SPECIAL_CONTENT = [
  "remaining_time",
  "install_status",
] as const;

// Special handling of state attributes per domain
export const STATE_DISPLAY_SPECIAL_CONTENT_DOMAINS: Record<
  string,
  (typeof STATE_DISPLAY_SPECIAL_CONTENT)[number][]
> = {
  timer: ["remaining_time"],
  update: ["install_status"],
};
