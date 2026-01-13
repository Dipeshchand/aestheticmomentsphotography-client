


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { preloadHomeAssets } from "../utils/preloadHomeAssets";

import img1 from "../assets/image/g1.jpg";
import img2 from "../assets/image/g2.jpg";
import img3 from "../assets/image/g3.jpg";
import img4 from "../assets/image/g4.jpg";
import img5 from "../assets/image/g5.jpg";
import img6 from "../assets/image/g6.jpg";
import img7 from "../assets/image/g7.jpg";
import img8 from "../assets/image/g8.jpg";
import img9 from "../assets/image/g9.jpg";
import img10 from "../assets/image/g10.jpg";
import img11 from "../assets/image/g11.jpg";
import img12 from "../assets/image/g12.jpg";
import img13 from "../assets/image/g13.jpg";
import img14 from "../assets/image/g14.jpg";

export default function IntroPage() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    preloadHomeAssets(setProgress).then(() => {
      setReady(true);
    });
  }, []);

  const images = [
    img1,img2,img3,img4,img5,
    img6,img7,img8,img9,
    img10,img11,img12,img13,img14
  ];

  let imageIndex = 0;

  return (
    <div className="w-full h-screen">
      <div className="grid grid-cols-3 grid-rows-5 md:grid-cols-5 md:grid-rows-3 w-full h-full">

        {Array.from({ length: 15 }).map((_, i) => {
          if (i === 7) {
            return (
              <div key={i} className="flex items-center justify-center bg-[#DCCDC2]">
                <div className="text-center">
                  <h1 className="text-3xl md:text-5xl font-baskervville mb-4">
                    Aesthetic Moments
                  </h1>
                  <button
                    disabled={!ready}
                    onClick={() => navigate("/home")}
                    className={`px-6 py-2.5 rounded-full text-white transition-all ${
                      ready
                        ? "bg-[#5A3F33] hover:scale-105"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {ready ? "STEP IN" : `Loading ${progress}%`}
                  </button>
                </div>
              </div>
            );
          }

          const img = images[imageIndex++];

          return (
            <div key={i} className="overflow-hidden">
              <img src={img} className="w-full h-full object-cover" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
