import React from "react";
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";

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
//homepage Images + video
import g4 from "../assets/image/g4.jpg";
import g2 from "../assets/image/g2.jpg";
import g16 from "../assets/image/g16.jpg";
import g7 from "../assets/image/g7.jpg";
import g18 from "../assets/image/g18.jpg";
import g19 from "../assets/image/g19.jpg";
import g20 from "../assets/image/g20.jpg";
import g21 from "../assets/image/g21.jpg";
import g22 from "../assets/image/g22.jpg";
import g23 from "../assets/image/g23.jpg";
import g24 from "../assets/image/g24.jpg";
import g25 from "../assets/image/g25.jpg";
import g14 from "../assets/image/g14.jpg";
import g27 from "../assets/image/g27.jpg";
import g6 from "../assets/image/g6.jpg";
import gn1 from "../assets/image/gn1.jpg";
import gn2 from "../assets/image/gn2.jpg";
import gn3 from "../assets/image/gn3.jpg";
import gn4 from "../assets/image/gn4.jpg";
import gn5 from "../assets/image/gn5.jpg";
import gn6 from "../assets/image/gn6.jpg";
import gn7 from "../assets/image/gn7.jpg";
import gn8 from "../assets/image/gn8.jpg";

const images = [
  img1, img2, img3,
  g4,g2, img4, img5, img6, img7,g16,g7,g18,g19,g20,g21,g22,g23,g24,g25,g27,g14,
  img8, img9, img10, img11, img12, img13, img14,
  g6,img4,gn1,gn2,gn3,gn4,gn5,gn6,gn7,gn8
];

export default function Gallery() {
  return (
    <div className="mt-32 ">
      <div className="fixed right-4  top-1/4  z-50 flex flex-col gap-4 mt-60">

        <a
          href="https://wa.me/918108569630"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaWhatsapp size={22} />
        </a>

        <a
          href="https://www.instagram.com/_aestheticmoments/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaInstagram size={22} />
        </a>

        <a
          href="tel:+918108569630"
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaPhoneAlt size={20} />
        </a>
      </div>

      {/* Heading */}
      <div className="flex justify-center mb-10">
        <span className="relative text-3xl font-semibold" style={{ fontFamily: "Session2" }}>
          Our Gallery
          <span className="absolute left-0 -bottom-2 h-[3px] w-full bg-gradient-to-r  to-red-400"></span>
        </span>
      </div>

      {/* Masonry Grid */}
      <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 [column-gap:0px] ">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden ">
            <img
              src={img}
              alt="Gallery"
              className="w-full object-cover  hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>

    </div>
  );
}
