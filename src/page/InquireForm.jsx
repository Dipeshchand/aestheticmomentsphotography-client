// import React from "react";

// const InquireForm = ({ onClose }) => {
//   return (
//     <div
//       className="fixed inset-0 mt-[25%] flex items-center justify-center p-4"
//       onClick={onClose}
//     >
//       {/* Popup */}
//       <div
//         className="relative w-full max-w-4xl h-[90vh] overflow-hidden rounded-xl bg-white shadow-2xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black text-2xl text-white"
//         >
//           ×
//         </button>

//         {/* Google Form */}
//         <iframe
//           src="https://docs.google.com/forms/d/1M3wBvHdxbBSvtGhSLjk7EZWjGq9StmRaRVTtG_Rw4OU/viewform?embedded=true"
//           title="Wedding Photography Inquiry Form"
//           className="h-full w-full border-0"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default InquireForm;

// import React, { useEffect } from "react";
// import { createPortal } from "react-dom";

// const InquireForm = ({ onClose }) => {
//   // Lock background scroll while the modal is open
//   useEffect(() => {
//     const originalOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = originalOverflow;
//     };
//   }, []);

//   const modalContent = (
//     <div
//       className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-3 sm:p-4"
//       onClick={onClose}
//     >
//       {/* Popup */}
//       <div
//         className="relative flex h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl sm:h-[90vh]"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black text-2xl leading-none text-white"
//           aria-label="Close"
//         >
//           ×
//         </button>

//         {/* Google Form */}
//         <iframe
//           src="https://docs.google.com/forms/d/1M3wBvHdxbBSvtGhSLjk7EZWjGq9StmRaRVTtG_Rw4OU/viewform?embedded=true"
//           title="Wedding Photography Inquiry Form"
//           className="h-full w-full flex-1 border-0"
//         ></iframe>
//       </div>
//     </div>
//   );

//   // Render outside the SmoothScroll wrapper's transformed context
//   return createPortal(modalContent, document.body);
// };

// export default InquireForm;

import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const InquireForm = ({ onClose }) => {
  // iOS-safe body scroll lock
  useEffect(() => {
    const scrollY = window.scrollY;
    const { style } = document.body;

    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.left = "0";
    style.right = "0";
    style.width = "100%";

    return () => {
      style.position = "";
      style.top = "";
      style.left = "";
      style.right = "";
      style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-3 sm:p-4"
      style={{ overscrollBehavior: "contain" }}
      onClick={onClose}
    >
      {/* Popup */}
      <div
        className="relative flex h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl sm:h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black text-2xl leading-none text-white"
          aria-label="Close"
        >
          ×
        </button>

        {/* Google Form */}
        <iframe
          src="https://docs.google.com/forms/d/1M3wBvHdxbBSvtGhSLjk7EZWjGq9StmRaRVTtG_Rw4OU/viewform?embedded=true"
          title="Wedding Photography Inquiry Form"
          className="h-full w-full flex-1 border-0"
        ></iframe>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default InquireForm;