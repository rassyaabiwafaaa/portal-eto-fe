import React from "react";
import BrivaOnOff from "./briva/ONOFF/BrivaOnOff";
import MpnPatchingSA from "./mpn/SAOnly/SaOnly";
import SPANInqVa from "./span/INQVA/SPANInqVa";

export const FEATURE_DISPATCHER = {
  briva: {
    "on-off": BrivaOnOff,
    "connection-test": React.lazy(() => import("./briva/TesConnections/ConnectionTest")),
  },
  mpn: {
    "patching-sa": MpnPatchingSA,
  },
  span:{
    "inquiry-va": SPANInqVa,
    "span-reject": React.lazy(() => import("./span/Reject/SPANReject")),
    "span-bo-valas": React.lazy(() => import("./span/BOValas/SPANBOValas")),
    "span-bpd-riau": React.lazy(() => import("./span/BPDRiau/SPANBPDRiau")),
  }
} as const;
