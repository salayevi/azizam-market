export const deviceConfig = {
  mobileMaxWidth: 1023,
  desktopMinWidth: 1024,
} as const;

export type DeviceMode = "mobile" | "desktop";