import BrivaOnOff from "./briva/BrivaOnOff";
import ConnectionTest from "./briva/ConnectionTest";
import MpnPatchingSA from "./mpn/SaOnly";

export const FEATURE_DISPATCHER = {
  briva: {
    "on-off": BrivaOnOff,
    "connection-test": ConnectionTest,
  },
  mpn: {
    "patching-sa": MpnPatchingSA,
  },
} as const;
