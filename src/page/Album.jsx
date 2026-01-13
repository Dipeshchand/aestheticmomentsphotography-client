import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Album() {
  const { slug } = useParams();
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function load() {
      const albums = await fetch("http://localhost:5000/albums").then(r => r.json());
      const found = albums.find(a => a.slug === slug);
      setAlbum(found);

      const images = await fetch(
        `http://localhost:5000/upload/album/${found._id}`
      ).then(r => r.json());

      setPhotos(images);
    }

    load();
  }, [slug]);

  if (!album) return <div>Loading...</div>;

  return (
    <div className="mt-28 px-6">
      <h2 className="text-3xl text-center mb-10">{album.title}</h2>

      <div className="columns-2 md:columns-3 lg:columns-4 [column-gap:1px]">
        {photos.map(photo => (
          <img
            key={photo._id}
            src={photo.url}
            className="w-full block"
          />
        ))}
      </div>
    </div>
  );
}
