import React from "react";
import BrivaOnOff from "./briva/BrivaOnOff";
import ConnectionTest from "./briva/ConnectionTest";
import MpnPatchingSA from "./mpn/SaOnly";
import SPANInqVa from "./span/INQVA/SPANInqVa";

export const FEATURE_DISPATCHER = {
  briva: {
    "on-off": BrivaOnOff,
    "connection-test": ConnectionTest,
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
