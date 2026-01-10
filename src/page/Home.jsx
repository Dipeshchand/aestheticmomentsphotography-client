// import { motion, useScroll, useTransform } from "framer-motion";

// import g4 from "../assets/image/g4.jpg";
// import g1 from "../assets/image/g1.jpg";
// import g2 from "../assets/image/g2.jpg";
// import g3 from "../assets/image/g3.jpg";
// import g5 from "../assets/image/g5.jpg";
// import g6 from "../assets/image/g6.jpg";
// import g7 from "../assets/image/g7.jpg";
// import g8 from "../assets/image/g8.jpg";
// import g9 from "../assets/image/g9.jpg";
// import g10 from "../assets/image/g10.jpg";
// import g11 from "../assets/image/g11.jpg";
// import g12 from "../assets/image/g12.jpg";
// import g13 from "../assets/image/g13.jpg";
// import g14 from "../assets/image/g14.jpg";
// import vd1 from "../assets/videos/vd1.mp4";

// /* Cinematic presets */

// const fadeUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 1.2, ease: [0.25, 0.8, 0.25, 1] }
//   }
// };

// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 1.1 } }
// };

// const scaleUp = {
//   hidden: { opacity: 0, scale: 0.94 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 1.5, ease: [0.25, 0.8, 0.25, 1] }
//   }
// };

// export default function Home() {
//   const { scrollY } = useScroll();
//   const heroY = useTransform(scrollY, [0, 600], [0, 140]);

//   return (
//     <div className="pt-15">

//       {/* HERO */}
//       <div className="relative overflow-hidden">
//         <motion.img
//           src={g4}
//           style={{ y: heroY }}
//           className="w-full h-auto"
//           variants={fadeIn}
//           initial="hidden"
//           animate="visible"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent" />
//       </div>

//       {/* HEADING */}
//       <motion.div
//         className="flex justify-center mt-10 text-center px-4"
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.25 }}
//       >
//         <h2 className="text-3xl md:text-5xl font-semibold leading-snug">
//           <span style={{ fontFamily: "Session3" }}>Wedding </span>
//           experiences that feel like
//           <span className="text-red-700" style={{ fontFamily: "Season" }}> you</span>
//         </h2>
//       </motion.div>

//       {/* PARAGRAPH */}
//       <motion.div
//         className="max-w-4xl mx-auto mt-5 text-base md:text-2xl font-light px-4"
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.25 }}
//       >
//        <p className="clear
//        ">
//   At the heart of our work is a simple belief: your wedding should feel like you.
//   We don’t do templates. We tell your story.
// </p>
//       </motion.div>

//       {/* BIG IMAGE */}
//       <div className="max-w-6xl mx-auto mt-16 px-4">
//         <motion.img
//           src={g3}
//           loading="lazy"
//           decoding="async"
//           className="w-full h-[650px] object-cover"
//           variants={scaleUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.25 }}
//         />
//       </div>

//       {/* 4 IMAGE GRID (staggered) */}
//       <motion.div
//         className="max-w-6xl mx-auto  grid grid-cols-2  gap-1 px-4 mt-1"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.25 }}
//         variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
//       >
//         {[g2, g1, g4, g5].map((img, i) => (
//           <motion.img
//             key={i}
//             src={img}
//             loading="lazy"
//             decoding="async"
//             className="w-full h-[450px] object-cover cursor-pointer"
//             variants={fadeUp}
//             whileHover={{ scale: 1.03 }}
//             transition={{ duration: 0.4 }}
//           />
//         ))}
//       </motion.div>

//       {/* 4 IMAGES + VIDEO */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-1 px-4 mt-1">
//         <motion.div
//           className="grid grid-cols-2 gap-1"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.25 }}
//           variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
//         >
//           {[g6, g7, g8, g9].map((img, i) => (
//             <motion.img
//               key={i}
//               src={img}
//               loading="lazy"
//               decoding="async"
//               className="w-full h-[300px] object-cover cursor-pointer"
//               variants={fadeUp}
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.4 }}
//             />
//           ))}
//         </motion.div>

//         <motion.video
//           src={vd1}
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="none"
//           className="w-full h-full object-cover"
//           variants={fadeIn}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.25 }}
//         />
//       </div>

//       {/* FINAL GRID */}
//       <div className="max-w-6xl mx-auto px-4 mt-1">
//         <motion.img
//           src={g10}
//           loading="lazy"
//           decoding="async"
//           className="w-full h-[650px] object-cover"
//           variants={scaleUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.25 }}
//         />

//         <motion.div
//           className="grid grid-cols-2 gap-1 mt-1"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.25 }}
//           variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
//         >
//           {[g11, g12, g13, g14].map((img, i) => (
//             <motion.img
//               key={i}
//               src={img}
//               loading="lazy"
//               decoding="async"
//               className="w-full h-[300px] object-cover cursor-pointer"
//               variants={fadeUp}
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.4 }}
//             />
//           ))}
//         </motion.div>
//       </div>
//       /       {/* YOUTUBE */}
//        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 mt-10">
//          {["u0yxbwIhiMA", "AassWprjxAs", "COrmja2HDy8", "QeRJlY41m_g"].map(id => (
//            <motion.div
//              key={id}
//              variants={fadeUp}
//              initial="hidden"
//              whileInView="visible"
//              viewport={{ once: true, amount: 0.25 }}
//            >
//              <iframe
//                loading="lazy"
//                src={`https://www.youtube.com/embed/${id}`}
//                className="w-full aspect-video rounded-lg"
//                allowFullScreen
//              />
//            </motion.div>
//          ))}
//        </div>

//     </div>
//   );
// }





import { motion, useScroll, useTransform } from "framer-motion";

import g4 from "../assets/image/g4.jpg";
import g1 from "../assets/image/g1.jpg";
import g2 from "../assets/image/g2.jpg";
import g3 from "../assets/image/g3.jpg";
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
        <h2 className="text-3xl md:text-5xl ">
          <span style={{ fontFamily: "Session3" }}>Wedding </span> experiences
          that feel like
          <span className="text-red-700" style={{ fontFamily: "Seasons2" }}>
            {" "}
            you
          </span>
        </h2>
      </motion.div>

      {/* PARAGRAPH */}
      <motion.div
        className="max-w-4xl mx-auto mt-5 text-center text-base md:text-2xl  px-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="leading-relaxed max-w-3xl max-w-3xl" style={{ fontFamily: "light" }}>
          At the heart of our work is a simple belief: your wedding should feel
          like you. So we don’t do templates or repeat ideas. We listen, we
          observe, and we build an experience that feels unmistakably yours;
          your story, your roots, your quirks, your magic. And once we begin,
          you become the centre of our universe. Every detail, every choice,
          every moment is shaped to make sure you can simply show up, feel the
          love, and enjoy your own celebration while we bring it all together
          behind the scenes.
        </p>
      </motion.div>

      {/* BIG IMAGE */}
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <motion.img
          src={g3}
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
        {[g2, g1, g4, g5].map((img, i) => (
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
          {[g6, g7, g8, g9].map((img, i) => (
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
          className="w-full h-[100vh]  sm:h-[55vh] md:h-full object-cover"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      </div>

      {/* FINAL GRID */}
      <div className="max-w-6xl mx-auto px-4 mt-1">
        <motion.img
          src={g10}
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
          {[g11, g12, g13, g14].map((img, i) => (
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
        className="flex justify-center font-semibold mt-10 text-4xl tracking-wide"
        style={{ fontFamily: "Seasons3", wordSpacing: "0.5rem" }}
      >
        <span>Wedding</span>
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

