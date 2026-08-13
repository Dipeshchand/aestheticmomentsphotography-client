import React from "react";

const InquireForm = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 mt-[25%] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Popup */}
      <div
        className="relative w-full max-w-4xl h-[90vh] overflow-hidden rounded-xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black text-2xl text-white"
        >
          ×
        </button>

        {/* Google Form */}
        <iframe
          src="https://docs.google.com/forms/d/1M3wBvHdxbBSvtGhSLjk7EZWjGq9StmRaRVTtG_Rw4OU/viewform?embedded=true"
          title="Wedding Photography Inquiry Form"
          className="h-full w-full border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default InquireForm;