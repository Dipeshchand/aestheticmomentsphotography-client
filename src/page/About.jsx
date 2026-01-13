import React from "react";
import founder from "../assets/image/founder.jpeg";

export default function About() {
  return (
    <div
      className="mt-34 md:mt-36 flex justify-center px-4 "
      style={{ fontFamily: "light" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-[32px] overflow-hidden w-full max-w-6xl min-h-[700px] shadow-xl bg-white">
        {/* IMAGE */}
        <div className="flex items-center justify-center  w-full h-[350px] md:h-full">
          <div
            className="relative 
                  w-60 h-60 
                  md:w-[520px] md:h-[520px] 
                  rounded-full 
                  overflow-hidden 
                  shadow-2xl 
                  ring-4 ring-white"
          >
            <img
              src={founder}
              alt="Founder"
              className="w-full h-full object-cover"
            />

            {/* subtle gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>

        {/* TEXT */}
        <div className="p-6 md:p-10 flex flex-col justify-center">
          <h2
            style={{ fontFamily: "light1" }}
            className="text-xl md:text-2xl leading-snug"
          >
            Ankit Agrawal <br />
            <span className="text-base md:text-lg text-gray-600">
              Founder of Aesthetic Moments
            </span>
          </h2>

          <p className="mt-4 text-sm md:text-base">
            Aesthetic Moments was built on years of experience, passion, and a
            deep understanding of visual storytelling.
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
            During these years, he mastered every aspect of the craft — from
            capturing raw emotions on wedding days to understanding client
            expectations, team coordination, and premium production quality.
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
            What began as a personal vision has now grown into a well-structured
            creative company with a dedicated{" "}
            <span className="font-semibold">team of 35+ professionals.</span>
          </p>

          <p className="mt-4 text-sm md:text-base">
            They have delivered beautiful wedding experiences to{" "}
            <span className="text-red-700 font-semibold">
              110+ happy clients
            </span>
            , each story crafted with care, creativity, and precision.
          </p>

          <p className="mt-4 text-sm md:text-base">
            His leadership is rooted in one clear belief — every wedding is
            unique and deserves to be captured in a timeless, emotionally
            powerful way.
          </p>
        </div>
      </div>
    </div>
  );
}
