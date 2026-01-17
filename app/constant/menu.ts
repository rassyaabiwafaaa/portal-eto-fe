export const APP_MENUS = {
  briva: {
    label: "BRIVA",
    features: [
      { key: "on-off", label: "On / Off" },
      { key: "connection-test", label: "Connection Test" },
    ],
  },
  mpn: {
    label: "MPN",
    features: [{ key: "patching-sa", label: "Patching SA Only" }],
  },
} as const;