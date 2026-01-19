import React from 'react'

export default function CardPatchBRIVA({status, handleToggle, loading}: {status: "ON" | "OFF", handleToggle: () => void, loading: boolean}) {
  return (
    <div className="card bg-base-300 shadow">
        <div className="card-body">
          <div className="flex justify-between items-center">
            {/* Info Detail */}
            <div>
              {/* Briva number */}
              <p className="text-sm text-gray-500">BRIVA Number</p>
              <p className="text-lg font-semibold">1234 5678 9012 3456</p>
              {/* Corp Name */}
              <p className="text-sm text-gray-500">Corporate Name</p>
              <p className="text-lg font-semibold">PT. ABCD EFGH</p>
            </div>
          </div>
          {/* Button on off */}
          <div className="flex justify-between items-center mt-2">
            <div>
              <p className="text-sm text-gray-500">Current Status</p>
              <p
                className={`text-lg font-semibold ${
                  status === "ON" ? "text-success" : "text-error"
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
  )
}