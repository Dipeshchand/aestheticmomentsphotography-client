import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* ---------------- Skeleton Component ---------------- */
function AlbumSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-[350px] rounded-xl"></div>
      <div className="h-5 bg-gray-300 mt-4 rounded w-3/4"></div>
    </div>
  );
}

/* ---------------- Portfolio Page ---------------- */
export default function Portfolio() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAlbums() {
      try {
        // ✅ Check cache first
        const cached = localStorage.getItem("albums");

        if (cached) {
          setAlbums(JSON.parse(cached));
          setLoading(false);
          return;
        }

        // 🔥 Fetch from API
        const res = await fetch(
          "https://aesthetic-backend-17tr.onrender.com/albums/public"
        );

        const data = await res.json();

        if (Array.isArray(data)) {
          setAlbums(data);
          localStorage.setItem("albums", JSON.stringify(data));
        } else {
          console.error("Albums API error:", data);
        }
      } catch (err) {
        console.error("Fetch failed:", err);
      } finally {
        setLoading(false);
      }
    }

    loadAlbums();
  }, []);

  return (
    <div className="mt-28 px-6">
      <h2
        className="text-3xl text-center mb-10 bg-gradient-to-r to-red-400"
        style={{ fontFamily: "light" }}
      >
        Our Weddings
      </h2>

      {/* 🔥 Skeleton Loader */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <AlbumSkeleton key={i} />
          ))}
        </div>
      )}

      {/* ✅ Actual Data */}
      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album) => (
            <Link
              key={album._id}
              to={`/portfolio/${album.slug}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={album.coverUrl}
                  className="w-full h-[350px] object-cover group-hover:scale-105 transition"
                  loading="lazy"
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
      )}
    </div>
  );
}
