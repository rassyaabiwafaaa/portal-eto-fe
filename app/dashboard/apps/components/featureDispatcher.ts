import BrivaOnOff from "./briva/BrivaOnOff";
import ConnectionTest from "./briva/ConnectionTest";
import MpnPatchingSA from "./mpn/SaOnly";
import SPANInqVa from "./span/SPANInqVa";

export const FEATURE_DISPATCHER = {
  briva: {
    "on-off": BrivaOnOff,
    "connection-test": ConnectionTest,
  },
  mpn: {
    "patching-sa": MpnPatchingSA,
  },
  span:{
    "inquiry-va": SPANInqVa
  }
} as const;
