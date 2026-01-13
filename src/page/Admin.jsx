import { useEffect, useState } from "react";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const [coverFile, setCoverFile] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);

  useEffect(() => {
    loadAlbums();
  }, []);

  async function loadAlbums() {
    const res = await fetch("http://localhost:5000/albums");
    const data = await res.json();
    setAlbums(data);
  }

  async function createAlbum() {
    if (!title) return alert("Enter album title");

    await fetch("http://localhost:5000/albums", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    setTitle("");
    loadAlbums();
  }

  async function uploadCover() {
    if (!selectedAlbum) return alert("Select an album");
    if (!coverFile) return alert("Choose a cover image");

    const fd = new FormData();
    fd.append("image", coverFile);

    const res = await fetch(
      `http://localhost:5000/albums/${selectedAlbum}/cover`,
      {
        method: "POST",
        body: fd,
      }
    );

    const data = await res.json();
    if (!res.ok) return alert(data.error || "Cover upload failed");

    alert("Cover uploaded successfully");
    setCoverFile(null);
    loadAlbums();
  }

  async function uploadPhoto() {
    if (!selectedAlbum) return alert("Select an album");
    if (!photoFile) return alert("Choose a photo");

    const fd = new FormData();
    fd.append("image", photoFile);

    const res = await fetch(`http://localhost:5000/upload/${selectedAlbum}`, {
      method: "POST",
      body: fd,
    });

    const data = await res.json();
    if (!res.ok) return alert(data.error || "Photo upload failed");

    alert("Photo uploaded");
    setPhotoFile(null);
  }

  async function deleteAlbum() {
    if (!selectedAlbum) return alert("Select an album");

    if (!window.confirm("Delete this album permanently?")) return;

    const res = await fetch(`http://localhost:5000/albums/${selectedAlbum}`, {
      method: "DELETE",
    });

    const data = await res.json();
    if (!res.ok) return alert(data.error || "Delete failed");

    alert("Album deleted");
    setSelectedAlbum("");
    loadAlbums();
  }

  return (
    <div className="mt-28 px-6 max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-center">Admin Panel</h2>

      {/* Create Album */}
      <input
        placeholder="Album title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full"
      />
      <button
        onClick={createAlbum}
        className="bg-black text-white px-4 py-2 w-full"
      >
        Create Album
      </button>

      {/* Select Album */}
      <select
        value={selectedAlbum}
        onChange={(e) => setSelectedAlbum(e.target.value)}
        className="border p-2 w-full"
      >
        <option value="">Select Album</option>
        {albums.map((a) => (
          <option key={a._id} value={a._id}>
            {a.title}
          </option>
        ))}
      </select>

      {/* Upload Cover */}
      <div className="space-y-2">
        <label className="block">
          <span className="text-sm">Choose Cover Image</span>
          <input
            type="file"
            accept="image/*"
            className="mt-1 block w-full"
            onChange={(e) => setCoverFile(e.target.files[0])}
          />
        </label>

        <button
          onClick={uploadCover}
          className="bg-blue-600 text-white px-4 py-2 w-full"
        >
          Upload Cover
        </button>
      </div>

      {/* Upload Photo */}
      <div className="space-y-2">
        <label className="block">
          <span className="text-sm border-2 gap-x-1">Choose Photo</span>
          <input
            type="file"
            accept="image/*"
            className="mt-1 block w-full"
            onChange={(e) => setPhotoFile(e.target.files[0])}
          />
        </label>

        <button
          onClick={uploadPhoto}
          className="bg-green-600 text-white px-4 py-2 w-full"
        >
          Upload Photo
        </button>
        <button
          onClick={deleteAlbum}
          className="bg-red-600 text-white px-4 py-2 w-full"
        >
          Delete Selected Album
        </button>
      </div>
    </div>
  );
}
