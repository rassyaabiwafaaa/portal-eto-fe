"use client";

import { useState } from "react";
import CardPatchBRIVA from "./CardPatchBRIVA";

export default function BrivaOnOff() {
  const [status, setStatus] = useState<"ON" | "OFF">("ON");
  const [loading, setLoading] = useState(false);

  const handleToggle = () => {
    setLoading(true);

    setTimeout(() => {
      setStatus((prev) => (prev === "ON" ? "OFF" : "ON"));
      setLoading(false);
    }, 200);
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-semibold">BRIVA – Service Control</h1>

      <input
        type="text"
        placeholder="Search fo BRIVA Number"
        className="input"
      />

      {/* Card Path BRIVA */}
      <CardPatchBRIVA status={status} handleToggle={handleToggle} loading={loading} />
    </div>
  );
}
