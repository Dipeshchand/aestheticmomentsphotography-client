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

const images = [
  g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12,g13,g14
];

export function preloadHomeAssets(onProgress) {
  let loaded = 0;
  const total = images.length + 1; // + video

  const update = () => {
    loaded++;
    onProgress(Math.round((loaded / total) * 100));
  };

  const imagePromises = images.map(src => {
    return new Promise(resolve => {
      const img = new Image();
      img.src = src;
      img.onload = () => { update(); resolve(); };
    });
  });

  const videoPromise = new Promise(resolve => {
    const video = document.createElement("video");
    video.src = vd1;
    video.onloadeddata = () => { update(); resolve(); };
  });

  return Promise.all([...imagePromises, videoPromise]);
}
