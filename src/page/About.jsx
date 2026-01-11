// // import React from "react";
// // import founder from "../assets/image/founder.jpeg";

// // export default function About() {
// //   return (
// //     <div className="mt-36 flex justify-center">
// //       <div className="grid grid-cols-2 gap-2 rounded-[32px] overflow-hidden w-[1000px] h-[820px] shadow-xl">

// //         {/* IMAGE */}
// //         <div className="w-full h-full">
// //           <img
// //             src={founder}
// //             alt="Founder"
// //             className="w-full h-full object-cover"
// //           />
// //         </div>
        
// //         {/* TEXT */}
// //         <div className=" p-5 flex flex-col">
// //             <p style={{fontFamily:"light1"}} className="text-2xl">About the Founder of Aesthetic Moments</p>
// //             <p className="mt-5">Aesthetic Moments was built on years of experience, passion, and a deep understanding of visual storytelling.</p>
// //             <p className="mt-5">The founder brings {" "}
// //                <span className="text-red-700 font-semibold">
// //                 over 8 years of professional experience
// //                 </span> in the photography and wedding film industry, having worked with {" "} 
// //                <span className="text-red-700 font-semibold">
// //                 multiple reputed production houses and creative companies.
// //                 </span>  <br />
// //                 <p className="mt-3">
// //                 During these years, he mastered every aspect of the craft — from capturing raw emotions on wedding days to understanding client expectations, team coordination, and premium production quality.
// //                 </p>
// //                   <p className="mt-3">
// //                     After gaining extensive industry exposure, he took the next step and {" "}  
// //                     <span className="text-red-700 font-semibold"> 
// //                      founded Aesthetic Moments ,
// //                     </span>
                    
// //                      which he has been leading  <span className="underline underline-offset-4"> successfully for the last 4 years.
// //                     </span>
// //                   </p>
// //                 </p>
// //                 <p className="mt-5">
// //                   What began as a personal vision has now grown into a well-structured creative company with a dedicated {""}
// //                   <span className="font-semibold">
// //                       team of 35+ professionals, including photographers, cinematographers, editors, and production specialists.
// //                     </span> {" "} <br />
// //                    <p className="mt-5">
// //                     Together, they have delivered beautiful wedding experiences to {" "}
// //                     <span className="text-red-700 font-semibold">
// //                      110+ happy clients
// //                       </span> 
// //                      , each story crafted with care, creativity, and precision.
// //                     </p> 
// //                 </p>
// //                 <p className="mt-3">
// //                   His leadership is rooted in one clear belief — every wedding is unique, and it deserves to be captured in a way that feels real, timeless, and emotionally powerful. This philosophy is what continues to shape Aesthetic Moments into a brand known for elegance, authenticity, and cinematic excellence.
// //                 </p>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// import React from "react";
// import founder from "../assets/image/founder.jpeg";

// export default function About() {
//   return (
//     <div className="mt-36 flex justify-center">
//       <div className="grid grid-cols-2 gap-2 rounded-[32px] overflow-hidden w-[1000px] h-[920px] shadow-xl">

//         {/* IMAGE */}
//         <div className="w-full h-full">
//           <img
//             src={founder}
//             alt="Founder"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* TEXT */}
//         <div className="p-10 flex flex-col justify-center">
//           <h2 style={{ fontFamily: "light1" }} className="text-2xl">
//              Ankit Agrawal <br /> Founder of Aesthetic Moments
//           </h2>

//           <p className="mt-5">
//             Aesthetic Moments was built on years of experience, passion, and a deep understanding of visual storytelling.
//           </p>

//           <p className="mt-4">
//             The founder brings{" "}
//             <span className="text-red-700 font-semibold">
//               over 8 years of professional experience
//             </span>{" "}
//             in the photography and wedding film industry, having worked with{" "}
//             <span className="text-red-700 font-semibold">
//               multiple reputed production houses and creative companies.
//             </span>
//           </p>

//           <p className="mt-4">
//             During these years, he mastered every aspect of the craft — from capturing raw emotions on wedding days to understanding client expectations, team coordination, and premium production quality.
//           </p>

//           <p className="mt-4">
//             After gaining extensive industry exposure, he took the next step and{" "}
//             <span className="text-red-700 font-semibold">
//               founded Aesthetic Moments,
//             </span>{" "}
//             which he has been leading{" "}
//             <span className="underline underline-offset-4">
//               successfully for the last 4 years.
//             </span>
//           </p>

//           <p className="mt-5">
//             What began as a personal vision has now grown into a well-structured creative company with a dedicated{" "}
//             <span className="font-semibold">
//               team of 35+ professionals, including photographers, cinematographers, editors, and production specialists.
//             </span>
//           </p>

//           <p className="mt-4">
//             Together, they have delivered beautiful wedding experiences to{" "}
//             <span className="text-red-700 font-semibold">110+ happy clients</span>, each story crafted with care, creativity, and precision.
//           </p>

//           <p className="mt-4">
//             His leadership is rooted in one clear belief — every wedding is unique, and it deserves to be captured in a way that feels real, timeless, and emotionally powerful. This philosophy is what continues to shape Aesthetic Moments into a brand known for elegance, authenticity, and cinematic excellence.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }


import React from "react";
import founder from "../assets/image/founder.jpeg";

export default function About() {
  return (
    <div className="mt-34 md:mt-36 flex justify-center px-4 "style={{fontFamily:"light"}}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-[32px] overflow-hidden w-full max-w-6xl min-h-[700px] shadow-xl bg-white">

        {/* IMAGE */}
        <div className="relative w-full h-[350px] md:h-full">
          <img
            src={founder}
            alt="Founder"
            className="w-full h-full object-cover"
          />

          {/* Optional gradient for text readability if you add text later */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden" />
        </div>

        {/* TEXT */}
        <div className="p-6 md:p-10 flex flex-col justify-center">
          <h2 style={{ fontFamily: "light1" }} className="text-xl md:text-2xl leading-snug">
            Ankit Agrawal <br />
            <span className="text-base md:text-lg text-gray-600">
              Founder of Aesthetic Moments
            </span>
          </h2>

          <p className="mt-4 text-sm md:text-base" >
            Aesthetic Moments was built on years of experience, passion, and a deep understanding of visual storytelling.
          </p>

          <p className="mt-4 text-sm md:text-base">
            The founder brings{" "}
            <span className="text-red-700 font-semibold">
              over 8 years of professional experience
            </span>{" "}
            in the photography and wedding film industry, having worked with{" "}
            <span className="text-red-700 font-semibold">
              multiple reputed production houses and creative companies.
            </span>
          </p>

          <p className="mt-4 text-sm md:text-base">
            During these years, he mastered every aspect of the craft — from capturing raw emotions on wedding days to understanding client expectations, team coordination, and premium production quality.
          </p>

          <p className="mt-4 text-sm md:text-base">
            After gaining extensive industry exposure, he took the next step and{" "}
            <span className="text-red-700 font-semibold">
              founded Aesthetic Moments,
            </span>{" "}
            which he has been leading{" "}
            <span className="underline underline-offset-4">
              successfully for the last 4 years.
            </span>
          </p>

          <p className="mt-5 text-sm md:text-base">
            What began as a personal vision has now grown into a well-structured creative company with a dedicated{" "}
            <span className="font-semibold">
              team of 35+ professionals.
            </span>
          </p>

          <p className="mt-4 text-sm md:text-base">
            They have delivered beautiful wedding experiences to{" "}
            <span className="text-red-700 font-semibold">110+ happy clients</span>, each story crafted with care, creativity, and precision.
          </p>

          <p className="mt-4 text-sm md:text-base">
            His leadership is rooted in one clear belief — every wedding is unique and deserves to be captured in a timeless, emotionally powerful way.
          </p>
        </div>

      </div>
    </div>
  );
}
