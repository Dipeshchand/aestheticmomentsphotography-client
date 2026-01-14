// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// export default function Gallery() {
//   const [albums, setAlbums] = useState([]);

//   useEffect(() => {
//     async function loadAlbums() {
//       const res = await fetch("http://localhost:5000/albums/public")

//       const data = await res.json();
//       setAlbums(data);
//     }
//     loadAlbums();
//   }, []);

//   return (
//     <div className="mt-31 px-6">
//       <h2 className="text-3xl text-center mb-10 bg-gradient-to-r  to-red-400" style={{fontFamily:"light"}}>Our Weddings</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {albums.map(album => (
//           <Link
//             key={album._id}
//             to={`/portfolio/${album.slug}`}
//             className="group"
//           >
//             <div className="relative overflow-hidden rounded-xl">
//               <img
//                 src={album.coverUrl}
//                 className="w-full h-[350px] object-cover group-hover:scale-105 transition"
//               />
//               <div className="absolute inset-0 bg-black/30 flex items-end p-5">
//                 <h3 className="text-white text-xl font-semibold">
//                   {album.title}
//                 </h3>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function loadAlbums() {
      const res = await fetch("https://aesthetic-backend-17tr.onrender.com/albums/public");
      const data = await res.json();

      if (Array.isArray(data)) {
        setAlbums(data);
      } else {
        console.error("Albums API error:", data);
        setAlbums([]);
      }
    }

    loadAlbums();
  }, []);

  return (
    <div className="mt-28 px-6">
      <h2 className="text-3xl text-center mb-10 bg-gradient-to-r  to-red-400" style={{fontFamily:"light"}}>Our Weddings</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {albums.map(album => (
          <Link
            key={album._id}
            to={`/portfolio/${album.slug}`}
            className="group"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={album.coverUrl}
                className="w-full h-[350px] object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-5">
                <h3 className="text-white text-xl font-semibold">
                  {album.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
