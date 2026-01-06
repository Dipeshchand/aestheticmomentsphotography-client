import herocover from "../assets/image/reff4.JPG";
import g1 from "../assets/image/g1.jpg";
import g2 from "../assets/image/g2.jpg";
import g3 from "../assets/image/g3.jpg";
import g4 from "../assets/image/g4.jpg";
import g5 from "../assets/image/g5.jpg";
import g6 from "../assets/image/g6.jpg";
import g7 from "../assets/image/g7.jpg";
import g8 from "../assets/image/g8.jpg";
import g9 from "../assets/image/g9.jpg";
import g10 from "../assets/image/g10.jpg";
import g11 from "../assets/image/g11.jpg";
import g12 from "../assets/image/g12.jpg";
import g13 from "../assets/image/g13.jpg";
import g14 from "../assets/image/g14.jpg";
import vd1 from "../assets/videos/vd1.mp4";

export default function Home() {
  return (
    <div className="pt-15">
      {/* HERO IMAGE */}
      <img src={herocover} alt="Wedding" className="w-full h-auto" />

      {/* HEADING */}
      <div className="flex justify-center mt-10 text-center px-4">
        <h2 className="text-3xl md:text-5xl font-semibold font-raleway leading-snug">
          {""}
          <span style={{ fontFamily: "Session1" }}>Wedding</span>
          experiences that feel like
          <span
            className="text-red-700 font-normal"
            style={{ fontFamily: "Season2" }}
          >
            {" "}
            you
          </span>
        </h2>
      </div>

      {/* PARAGRAPH */}
      <div className="max-w-4xl mx-auto mt-5 text-base md:text-2xl font-light px-4 md:px-0">
        <p>
          At the heart of our work is a simple belief: your wedding should feel
          like you. So we don’t do templates or repeat ideas. We listen, we
          observe, and we build an experience that feels unmistakably yours;
          your story, your roots, your quirks, your magic...
        </p>
      </div>

      {/* IMAGE GRID */}
      <div className="max-w-6xl mx-auto mt-16 grid gap-1 px-4">
        {/* BIG IMAGE */}
        <div>
          <img
            src={g3}
            alt=""
            className="w-full h-[260px] sm:h-[400px] md:h-[650px] lg:h-[900px] object-cover"
          />
        </div>

        {/* 4 IMAGES GRID */}
        <div className="grid grid-cols-2 gap-1">
          <img
            src={g2}
            className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover"
          />
          <img
            src={g1}
            className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover"
          />
          <img
            src={g4}
            className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover"
          />
          <img
            src={g5}
            className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-1 grid grid-cols-1 md:grid-cols-2 gap-1 px-4">
        {/* LEFT 4 IMAGES GRID */}
        <div className="grid grid-cols-2 gap-1">
          <img
            src={g6}
            className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover"
          />
          <img
            src={g7}
            className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover "
          />
          <img
            src={g8}
            className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover "
          />
          <img
            src={g9}
            className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover "
          />
        </div>

        {/* RIGHT BIG IMAGE */}
        <div>
          <video
            src={vd1}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
      </div>

      <div className="max-w-6xl mx-auto  grid gap-1 px-4">
        {/* BIG IMAGE */}
        <div>
          <img
            src={g10}
            alt=""
            className="w-full h-[260px] sm:h-[400px] md:h-[650px] lg:h-[900px] object-cover"
          />
        </div>

        {/* 4 IMAGES GRID */}
        <div className="grid grid-cols-2 gap-1">
          <img
            src={g11}
            className="w-full h-[240px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover"
          />
          <img
            src={g12}
            className="w-full h-[240px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover"
          />
          <img
            src={g13}
            className="w-full h-[240px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover"
          />
          <img
            src={g14}
            className="w-full h-[240px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover"
          />
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <div>
          <p style={{ fontFamily: "Seasons" }} className="text-3xl">
            Wedding {""}
            <span
              style={{ fontFamily: "Seasons1" }}
              className="font-medium text-red-800 font-bold"
            >
              Films
            </span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 mt-5">
        <iframe
          className="w-full aspect-video rounded-lg"
          src="https://www.youtube.com/embed/u0yxbwIhiMA"
          title="YouTube video player"
          allowFullScreen
        />
        <iframe
          className="w-full aspect-video rounded-lg"
          src="https://www.youtube.com/embed/AassWprjxAs"
          title="YouTube video player"
          allowFullScreen
        />

        <iframe
          className="w-full aspect-video rounded-lg"
          src="https://www.youtube.com/embed/COrmja2HDy8"
          title="YouTube video player"
          allowFullScreen
        />

        <iframe
          className="w-full aspect-video rounded-lg"
          src="https://www.youtube.com/embed/QeRJlY41m_g"
          title="YouTube video player"
          allowFullScreen
        />
      </div>
    </div>
  );
}
