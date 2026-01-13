// // import { useEffect, useState } from "react";

// // const API = "http://localhost:5000";

// // function authHeader() {
// //   return {
// //     Authorization: localStorage.getItem("token"),
// //   };
// // }

// // export default function Admin() {
// //   const [title, setTitle] = useState("");
// //   const [albums, setAlbums] = useState([]);
// //   const [selectedAlbum, setSelectedAlbum] = useState("");
// //   const [coverFile, setCoverFile] = useState(null);
// //   const [photoFile, setPhotoFile] = useState(null);

// //   useEffect(() => {
// //     if (!localStorage.getItem("token")) {
// //       window.location.href = "/login";
// //     } else {
// //       loadAlbums();
// //     }
// //   }, []);

// //   async function loadAlbums() {
// //     const res = await fetch(`${API}/albums`, {
// //       headers: authHeader(),
// //     });
// //     const data = await res.json();
// //     setAlbums(data);
// //   }

// //   async function createAlbum() {
// //     if (!title) return alert("Enter album title");

// //     await fetch(`${API}/albums`, {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //         ...authHeader(),
// //       },
// //       body: JSON.stringify({ title }),
// //     });

// //     setTitle("");
// //     loadAlbums();
// //   }

// //   async function uploadCover() {
// //     if (!selectedAlbum) return alert("Select an album");
// //     if (!coverFile) return alert("Choose a cover image");

// //     const fd = new FormData();
// //     fd.append("image", coverFile);

// //     const res = await fetch(`${API}/albums/${selectedAlbum}/cover`, {
// //       method: "POST",
// //       headers: authHeader(),
// //       body: fd,
// //     });

// //     const data = await res.json();
// //     if (!res.ok) return alert(data.error || "Cover upload failed");

// //     alert("✅ Cover uploaded successfully");
// //     setCoverFile(null);
// //     loadAlbums();
// //   }

// //   async function uploadPhoto() {
// //     if (!selectedAlbum) return alert("Select an album");
// //     if (!photoFile) return alert("Choose a photo");

// //     const fd = new FormData();
// //     fd.append("image", photoFile);

// //     const res = await fetch(`${API}/upload/${selectedAlbum}`, {
// //       method: "POST",
// //       headers: authHeader(),
// //       body: fd,
// //     });

// //     const data = await res.json();
// //     if (!res.ok) return alert(data.error || "Photo upload failed");

// //     alert("✅ Photo uploaded successfully");
// //     setPhotoFile(null);
// //   }

// //   async function deleteAlbum() {
// //     if (!selectedAlbum) return alert("Select an album");
// //     if (!window.confirm("Delete this album permanently?")) return;

// //     const res = await fetch(`${API}/albums/${selectedAlbum}`, {
// //       method: "DELETE",
// //       headers: authHeader(),
// //     });

// //     const data = await res.json();
// //     if (!res.ok) return alert(data.error || "Delete failed");

// //     alert("🗑 Album deleted");
// //     setSelectedAlbum("");
// //     loadAlbums();
// //   }

// //   return (
// //     <div className="mt-28 px-6 max-w-xl mx-auto space-y-6">
// //       <h2 className="text-2xl font-semibold text-center">Admin Panel</h2>

// //       {/* Create Album */}
// //       <input
// //         placeholder="Album title"
// //         value={title}
// //         onChange={(e) => setTitle(e.target.value)}
// //         className="border p-2 w-full"
// //       />
// //       <button onClick={createAlbum} className="bg-black text-white px-4 py-2 w-full">
// //         Create Album
// //       </button>

// //       {/* Select Album */}
// //       <select
// //         value={selectedAlbum}
// //         onChange={(e) => setSelectedAlbum(e.target.value)}
// //         className="border p-2 w-full"
// //       >
// //         <option value="">Select Album</option>
// //         {albums.map((a) => (
// //           <option key={a._id} value={a._id}>
// //             {a.title}
// //           </option>
// //         ))}
// //       </select>

// //       {/* Upload Cover */}
// //       <div className="space-y-2">
// //         <input type="file" accept="image/*" onChange={(e) => setCoverFile(e.target.files[0])} />
// //         <button onClick={uploadCover} className="bg-blue-600 text-white px-4 py-2 w-full">
// //           Upload Cover
// //         </button>
// //       </div>

// //       {/* Upload Photo */}
// //       <div className="space-y-2">
// //         <input type="file" accept="image/*" onChange={(e) => setPhotoFile(e.target.files[0])} />
// //         <button onClick={uploadPhoto} className="bg-green-600 text-white px-4 py-2 w-full">
// //           Upload Photo
// //         </button>
// //         <button onClick={deleteAlbum} className="bg-red-600 text-white px-4 py-2 w-full">
// //           Delete Selected Album
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// import { useEffect, useState } from "react";

// const API = "http://localhost:5000";

// function authHeader() {
//   return {
//     Authorization: localStorage.getItem("token"),
//   };
// }

// export default function Admin() {
//   const [title, setTitle] = useState("");
//   const [albums, setAlbums] = useState([]);
//   const [selectedAlbum, setSelectedAlbum] = useState("");
//   const [coverFile, setCoverFile] = useState(null);
//   const [photoFile, setPhotoFile] = useState(null);

// useEffect(()=>{
//   loadAlbums();
// },[])

//   async function loadAlbums() {
//     const res = await fetch(`${API}/albums`, {
//       headers: authHeader(),
//     });
//     const data = await res.json();
//     setAlbums(data);
//   }

//   async function createAlbum() {
//     if (!title) return alert("Enter album title");

//     await fetch(`${API}/albums`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         ...authHeader(),
//       },
//       body: JSON.stringify({ title }),
//     });

//     setTitle("");
//     loadAlbums();
//   }

//   async function uploadCover() {
//     if (!selectedAlbum) return alert("Select an album");
//     if (!coverFile) return alert("Choose a cover image");

//     const fd = new FormData();
//     fd.append("image", coverFile);

//     const res = await fetch(`${API}/albums/${selectedAlbum}/cover`, {
//       method: "POST",
//       headers: authHeader(),
//       body: fd,
//     });

//     const data = await res.json();
//     if (!res.ok) return alert(data.error || "Cover upload failed");

//     alert("✅ Cover uploaded successfully");
//     setCoverFile(null);
//     loadAlbums();
//   }

//   async function uploadPhoto() {
//     if (!selectedAlbum) return alert("Select an album");
//     if (!photoFile) return alert("Choose a photo");

//     const fd = new FormData();
//     fd.append("image", photoFile);

//     const res = await fetch(`${API}/upload/${selectedAlbum}`, {
//       method: "POST",
//       headers: authHeader(),
//       body: fd,
//     });

//     const data = await res.json();
//     if (!res.ok) return alert(data.error || "Photo upload failed");

//     alert("✅ Photo uploaded successfully");
//     setPhotoFile(null);
//   }

//   async function deleteAlbum() {
//     if (!selectedAlbum) return alert("Select an album");
//     if (!window.confirm("Delete this album permanently?")) return;

//     const res = await fetch(`${API}/albums/${selectedAlbum}`, {
//       method: "DELETE",
//       headers: authHeader(),
//     });

//     const data = await res.json();
//     if (!res.ok) return alert(data.error || "Delete failed");

//     alert("🗑 Album deleted");
//     setSelectedAlbum("");
//     loadAlbums();
//   }

//   return (
//     <div className="mt-28 px-6 max-w-xl mx-auto space-y-6 border-1 mb-10 rounded-2xl">
//       <h2 className="text-2xl font-semibold text-center">Admin Panel</h2>

//       {/* Create Album */}
//       <input
//         placeholder="Album title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         className="border p-2 w-full"
//       />
//       <button onClick={createAlbum} className="bg-black text-white px-4 py-2 w-full">
//         Create Album
//       </button>

//       {/* Select Album */}
//       <select
//         value={selectedAlbum}
//         onChange={(e) => setSelectedAlbum(e.target.value)}
//         className="border p-2 w-full"
//       >
//         <option value="">Select Album</option>
//         {albums.map((a) => (
//           <option key={a._id} value={a._id}>
//             {a.title}
//           </option>
//         ))}
//       </select>

//       {/* Upload Cover */}
//       <div className="space-y-2">
//         <input type="file" accept="image/*" onChange={(e) => setCoverFile(e.target.files[0])} />
//         <button onClick={uploadCover} className="bg-blue-600 text-white px-4 py-2 w-full">
//           Upload Cover
//         </button>
//       </div>

//       {/* Upload Photo */}
//       <div className="space-y-2">
//         <input type="file" accept="image/*" onChange={(e) => setPhotoFile(e.target.files[0])} />
//         <button onClick={uploadPhoto} className="bg-green-600 text-white px-4 py-2 w-full">
//           Upload Photo
//         </button>
//         <button onClick={deleteAlbum} className="bg-red-600 text-white px-4 py-2 w-full">
//           Delete Selected Album
//         </button>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";

const API = "http://localhost:5000";

function authHeader() {
  return {
    Authorization: localStorage.getItem("token"),
  };
}

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
    const res = await fetch(`${API}/albums`, { headers: authHeader() });
    const data = await res.json();
    setAlbums(Array.isArray(data) ? data : []);
  }

  async function createAlbum() {
    if (!title) return alert("Enter album title");

    await fetch(`${API}/albums`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authHeader(),
      },
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

    const res = await fetch(`${API}/albums/${selectedAlbum}/cover`, {
      method: "POST",
      headers: authHeader(),
      body: fd,
    });

    const data = await res.json();
    if (!res.ok) return alert(data.error || "Cover upload failed");

    alert("Cover uploaded");
    setCoverFile(null);
    loadAlbums();
  }

  async function uploadPhoto() {
    if (!selectedAlbum) return alert("Select an album");
    if (!photoFile) return alert("Choose a photo");

    const fd = new FormData();
    fd.append("image", photoFile);

    const res = await fetch(`${API}/upload/${selectedAlbum}`, {
      method: "POST",
      headers: authHeader(),
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

    const res = await fetch(`${API}/albums/${selectedAlbum}`, {
      method: "DELETE",
      headers: authHeader(),
    });

    const data = await res.json();
    if (!res.ok) return alert(data.error || "Delete failed");

    alert("Album deleted");
    setSelectedAlbum("");
    loadAlbums();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-8">

        <h2 className="text-3xl font-bold text-center text-gray-800">
          Admin Dashboard
        </h2>

        {/* Create Album */}
        <div className="space-y-3">
          <label className="text-sm text-gray-600">Album Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter album name"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black outline-none"
          />
          <button
            onClick={createAlbum}
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Create Album
          </button>
        </div>

        {/* Album Selector */}
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Select Album</label>
          <select
            value={selectedAlbum}
            onChange={(e) => setSelectedAlbum(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
          >
            <option value="">Choose album</option>
            {albums.map((a) => (
              <option key={a._id} value={a._id}>
                {a.title}
              </option>
            ))}
          </select>
        </div>

        {/* Upload Cover */}
        <div className="bg-gray-100 p-4 rounded-xl space-y-3">
          <p className="font-medium">Upload Cover Image</p>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setCoverFile(e.target.files[0])}
          />
          <button
            onClick={uploadCover}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Upload Cover
          </button>
        </div>

        {/* Upload Photos */}
        <div className="bg-gray-100 p-4 rounded-xl space-y-3">
          <p className="font-medium">Upload Album Photo</p>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhotoFile(e.target.files[0])}
          />
          <button
            onClick={uploadPhoto}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Upload Photo
          </button>
        </div>

        {/* Delete */}
        <button
          onClick={deleteAlbum}
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
        >
          Delete Album
        </button>

      </div>
    </div>
  );
}
