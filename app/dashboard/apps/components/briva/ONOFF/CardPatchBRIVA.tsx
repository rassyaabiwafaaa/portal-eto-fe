import React, { useRef } from "react";

export default function CardPatchBRIVA({ data, onConfirmToggle, loading }: any) {
  const isActive = data.IsActive === "Y";
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleOpenModal = () => {
    modalRef.current?.showModal();
  };

  const handleProcessAction = () => {
    modalRef.current?.close();
    onConfirmToggle();
  };

  return (
    <>
      <div className="card bg-base-100 shadow-sm border border-base-200">
        <div className="card-body p-6">
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <div className="flex-1 space-y-4">
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-400">Partner Number</p>
                <p className="text-xl font-mono font-bold text-[#3771B8]">{data.Brivano}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-400">Corporate Name</p>
                <p className="text-lg font-semibold text-gray-700">{data.CorpName}</p>
              </div>
            </div>

            <div className="flex flex-col items-end justify-center sm:border-l pl-0 sm:pl-8 border-base-200">
              <div className="badge badge-lg font-bold mb-4 py-4 px-4 gap-2">
                <span className={`w-2 h-2 rounded-full ${isActive ? "bg-success animate-pulse" : "bg-error"}`}></span>
                {isActive ? "ACTIVE" : "INACTIVE"}
              </div>

              <button
                className={`btn btn-sm w-32 ${isActive ? "btn-error btn-outline" : "btn-success text-white"}`}
                onClick={handleOpenModal}
                disabled={loading}
              >
                {loading ? <span className="loading loading-spinner"></span> : (isActive ? "Turn OFF" : "Turn ON")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- MODAL KONFIRMASI --- */}
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-center">
          <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full ${isActive ? 'bg-red-100' : 'bg-green-100'}`}>
             <svg className={`h-6 w-6 ${isActive ? 'text-red-600' : 'text-green-600'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
             </svg>
          </div>
          <h3 className="font-bold text-lg">Are you sure?</h3>
          <p className="py-4 text-sm text-gray-500">
            You are about to <span className="font-bold">{isActive ? "DEACTIVATE" : "ACTIVATE"}</span> service for <span className="font-bold text-gray-700">{data.CorpName}</span>. 
            This action will take effect immediately.
          </p>
          <div className="modal-action flex justify-center gap-2">
            <button className="btn btn-ghost btn-sm" onClick={() => modalRef.current?.close()}>Cancel</button>
            <button className={`btn btn-sm ${isActive ? 'btn-error' : 'btn-success'} text-white`} onClick={handleProcessAction}>
              Yes, Proceed
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}