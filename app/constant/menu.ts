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
      { key: "patching-dnp-&-lhp", label: "Patching DNP & LHP" },
    ],
  },
   {
    type: "group",
    key: "span",
    label: "SPAN",
    features: [
      { key: "inquiry-va", label: "SPAN INQUIRY VA" },
      { key: "span-reject", label: "SPAN REJECT" },
      { key: "span-bo-valas", label: "SPAN BO VALAS" },
      { key: "span-bpd-riau", label: "SPAN BPD RIAU" },
    ],
  },
  {
    type: "group",
    key: "reports",
    label: "REPORTS",
    features: [
      { key: "reports", label: "REPORTS" },
    ],
  },
];