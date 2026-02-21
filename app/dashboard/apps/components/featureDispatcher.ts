import React from "react";
import dynamic from "next/dynamic"; // Gunakan ini untuk Next.js
import BrivaOnOff from "./briva/ONOFF/BrivaOnOff";
import MpnPatchingSA from "./mpn/SAOnly/SaOnly";
import SPANInqVa from "./span/INQVA/SPANInqVa";

export const FEATURE_DISPATCHER = {
  briva: {
    "on-off": BrivaOnOff,
    "connection-test": dynamic(() => import("./briva/TesConnections/ConnectionTest")),
  },
  mpn: {
    "patching-sa": MpnPatchingSA,
    // Hindari simbol '&' agar URL aman
    "patching-dnp-lhp": dynamic(() => import("./mpn/DNPLHP/MPNDNPLHP")),
  },
  span: {
    "inquiry-va": SPANInqVa,
    "span-reject": dynamic(() => import("./span/Reject/SPANReject")),
    "span-bo-valas": dynamic(() => import("./span/BOValas/SPANBOValas")),
    "span-bpd-riau": dynamic(() => import("./span/BPDRiau/SPANBPDRiau")),
  },
  cashcard: {
    "update-status-cashcard": dynamic(() => import("./cashcard/UpdateStatusCashcard")),
  },
} as const;