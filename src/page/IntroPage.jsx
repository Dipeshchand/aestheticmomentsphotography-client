// import { useNavigate } from "react-router-dom";

// // Import 12 videos
// import v1 from "../assets/videos/v1.mp4";
// import v2 from "../assets/videos/v2.mp4";
// import v3 from "../assets/videos/v3.mp4";
// import v4 from "../assets/videos/v4.mp4";
// import v5 from "../assets/videos/v5.mp4";
// import v6 from "../assets/videos/v6.mp4";
// import v7 from "../assets/videos/v7.mp4";
// import v8 from "../assets/videos/v8.mp4";
// import v9 from "../assets/videos/v9.mp4";
// import v10 from "../assets/videos/v10.mp4";
// import v11 from "../assets/videos/v11.mp4";
// import v12 from "../assets/videos/v12.mp4";

// export default function IntroPage() {
//   const navigate = useNavigate();

//   const videos = [
//     v1, v2, v3, v4, v5, v6,
//     v7, v8, v9, v10, v11, v12
//   ];

//   const TOTAL_CELLS = 13;
//   const CENTER_INDEX = 6; // middle of 13

//   let videoIndex = 0;

//   return (
//     <div className="w-full h-screen overflow-hidden">
//       <div className="grid grid-cols-3 grid-rows-5 md:grid-cols-5 md:grid-rows-3 w-full h-full">

//         {Array.from({ length: TOTAL_CELLS }).map((_, i) => {
//           if (i === CENTER_INDEX) {
//             return (
//               <div
//                 key={i}
//                 className="flex items-center justify-center bg-[#DCCDC2]"
//               >
//                 <div className="text-center">
//                   <h1 className="text-3xl md:text-5xl font-baskervville mb-4">
//                     ELYSIA
//                   </h1>
//                   <button
//                     onClick={() => navigate("/home")}
//                     className="px-6 py-2.5 bg-[#5A3F33] text-white rounded-full"
//                   >
//                     STEP IN
//                   </button>
//                 </div>
//               </div>
//             );
//           }

//           const video = videos[videoIndex++];

//           return (
//             <div key={i} className="overflow-hidden">
//               <video
//                 src={video}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 preload="none"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           );
//         })}

//       </div>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";

// Dummy test video (small + fast to load)
const DUMMY_VIDEO = "https://www.w3schools.com/html/mov_bbb.mp4";

export default function IntroPage() {
  const navigate = useNavigate();

  // 12 placeholders
  const videos = Array(12).fill(DUMMY_VIDEO);

  const TOTAL_CELLS = 15;
  const CENTER_INDEX = 7;

  let videoIndex = 0;

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="grid grid-cols-3 grid-rows-5 md:grid-cols-5 md:grid-rows-3 w-full h-full">

        {Array.from({ length: TOTAL_CELLS }).map((_, i) => {
          if (i === CENTER_INDEX) {
            return (
              <div
                key={i}
                className="flex items-center justify-center bg-[#DCCDC2]"
              >
                <div className="text-center">
                  <h1 className="text-3xl md:text-5xl font-baskervville mb-4">
                    ELYSIA
                  </h1>
                  <button
                    onClick={() => navigate("/home")}
                    className="px-6 py-2.5 bg-[#5A3F33] text-white rounded-full"
                  >
                    STEP IN
                  </button>
                </div>
              </div>
            );
          }

          const video = videos[videoIndex++];

          return (
            <div key={i} className="overflow-hidden">
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}

      </div>
    </div>
  );
}
