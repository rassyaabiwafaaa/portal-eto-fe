type SingleMenu = {
  type: "single";
  label: string;
  href: string;
}

type GroupMenu = {
  type: "group";
  label: string;
  key: string;
  features: {
    key: string;
    label: string;
  }[];
};

export type AppMenu = SingleMenu | GroupMenu;

export const APP_MENUS: AppMenu[] = [
  {
    type: "single",
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    type: "group",
    key: "briva",
    label: "BRIVA",
    features: [
      { key: "on-off", label: "On / Off" },
      { key: "connection-test", label: "Connection Test" },
    ],
  },
  {
    type: "group",
    key: "mpn",
    label: "MPN",
    features: [
      { key: "patching-sa", label: "Patching SA Only" },
    ],
  },
];