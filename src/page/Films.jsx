import { useEffect, useState } from "react";

export default function Films() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

  // 🔹 Fix HTML encoded titles like &amp;, &quot;, &#39;
  function decodeHTML(text) {
    const txt = document.createElement("textarea");
    txt.innerHTML = text;
    return txt.value;
  }

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=15`
    )
      .then((res) => res.json())
      .then((data) => {
        const onlyVideos = data.items.filter(
          (item) => item.id.kind === "youtube#video"
        );
        setVideos(onlyVideos);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F4ED] py-20 px-4 mt-15">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-4xl md:text-5xl text-center mb-12"
          style={{ fontFamily: "light" }}
        >
          Our Wedding{" "}
          <span
            style={{ fontFamily: "Seasons1" }}
            className="text-red-700"
          >
            Films
          </span>
        </h1>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-full h-[250px] bg-gray-200 animate-pulse rounded-xl"
              />
            ))}
          </div>
        )}

        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id.videoId}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition"
              >
                <iframe
                  className="w-full aspect-video"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  title={decodeHTML(video.snippet.title)}
                  allowFullScreen
                ></iframe>

                <div className="p-4">
                  <p className="font-medium line-clamp-2">
                    {decodeHTML(video.snippet.title)}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(video.snippet.publishedAt).toDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
