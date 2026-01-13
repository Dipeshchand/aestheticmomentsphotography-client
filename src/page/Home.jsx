import { motion, useScroll, useTransform } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";

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
import vd1 from "../assets/videos/vd1.mp4";

/* Cinematic animations */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.1 } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.5, ease: [0.25, 0.8, 0.25, 1] },
  },
};

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 140]);

  return (
    <div className="pt-15">
      {/* FLOATING CONTACT ICONS */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 mt-60"
      >
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
      </motion.div>

      {/* HERO */}
      <div className="relative overflow-hidden">
        <motion.img
          src={g4}
          style={{ y: heroY }}
          className="w-full h-[50vh] sm:h-[65vh] md:h-[80vh] lg:h-[95vh] object-cover object-center"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent" />
      </div>

      {/* HEADING */}
      <motion.div
        className="flex justify-center mt-10 text-center px-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="text-2xl md:text-3xl ">
          <span style={{ fontFamily: "Session1" }}>Capturing </span> Most
          Beautiful Moments -
          <span className="text-red-700" style={{ fontFamily: "light1" }}>
            {" "}
            Professional Wedding Portrait Photography
          </span>
        </h2>
      </motion.div>
      <div className="flex justify-center mt-4">
        <a
          href="https://wa.me/918108569630"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 text-sm rounded-full bg-red-800 text-white hover:bg-gray-800 transition no-underline"
        >
          Book a Session
        </a>
      </div>

      {/* PARAGRAPH */}
      <motion.div
        className="max-w-4xl mx-auto mt-5 text-center text-base md:text-2xl px-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p
          className="leading-relaxed max-w-3xl"
          style={{ fontFamily: "light" }}
        >
          At the heart of our work is a simple belief: your wedding should feel
          like you. So we don’t do templates or repeat ideas. We listen, we
          observe, and we build an experience that feels unmistakably yours.
        </p>
      </motion.div>

      {/* BIG IMAGE */}
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <motion.img
          src={g25}
          className="w-full h-[35vh] sm:h-[50vh] md:h-[65vh] lg:h-[85vh] object-cover object-center"
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        />
      </div>

      {/* GRID */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-2 gap-1 px-4 mt-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
      >
        {[g2, g16, g7, g18].map((img, i) => (
          <motion.img
            key={i}
            src={img}
            className="w-full h-[22vh] sm:h-[28vh] md:h-[35vh] lg:h-[45vh] object-cover object-center"
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
          />
        ))}
      </motion.div>

      {/* IMAGES + VIDEO */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-1 px-4 mt-1">
        <motion.div
          className="grid grid-cols-2 gap-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {[g20, g21, g22, g24].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              className="w-full h-[20vh] sm:h-[25vh] md:h-[30vh] lg:h-[40vh] object-cover object-center"
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
            />
          ))}
        </motion.div>

        <motion.video
          src={vd1}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-[100vh] sm:h-[55vh] md:h-full object-cover"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      </div>

      {/* FINAL GRID */}
      <div className="max-w-6xl mx-auto px-4 mt-1">
        <motion.img
          src={g19}
          className="w-full h-[35vh] sm:h-[50vh] md:h-[65vh] lg:h-[85vh] object-cover object-center"
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
        />

        <motion.div
          className="grid grid-cols-2 gap-1 mt-1"
          initial="hidden"
          whileInView="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {[g23, g14, g27, g6].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              className="w-full h-[20vh] sm:h-[25vh] md:h-[30vh] lg:h-[40vh] object-cover object-center"
              variants={fadeUp}
            />
          ))}
        </motion.div>
      </div>

      <div
        className="flex justify-center mt-10 text-4xl tracking-wide"
        style={{ fontFamily: "Seasons1", wordSpacing: "0.5rem" }}
      >
        <span className=" bg-gradient-to-r  to-red-400">Wedding</span>
        <span className="text-red-600 ml-2">Films</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 mt-10">
        {["u0yxbwIhiMA", "AassWprjxAs", "COrmja2HDy8", "QeRJlY41m_g"].map(
          (id) => (
            <motion.div
              key={id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <iframe
                loading="lazy"
                src={`https://www.youtube.com/embed/${id}`}
                className="w-full aspect-video rounded-lg"
                allowFullScreen
              />
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}
