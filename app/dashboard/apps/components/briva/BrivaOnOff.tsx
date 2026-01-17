"use client";

import { useState } from "react";

export default function BrivaOnOff() {
  const [status, setStatus] = useState<"ON" | "OFF">("ON");
  const [loading, setLoading] = useState(false);

  const handleToggle = () => {
    setLoading(true);

    setTimeout(() => {
      setStatus((prev) => (prev === "ON" ? "OFF" : "ON"));
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-semibold">
        BRIVA – Service Control
      </h1>

      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">
                Current Status
              </p>
              <p
                className={`text-lg font-semibold ${
                  status === "ON"
                    ? "text-success"
                    : "text-error"
                }`}
              >
                {status}
              </p>
            </div>

            <button
              className="btn btn-outline"
              onClick={handleToggle}
              disabled={loading}
            >
              {loading
                ? "Processing..."
                : `Turn ${status === "ON" ? "OFF" : "ON"}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
