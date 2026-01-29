// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function AdminBlog() {
//   const [blogs, setBlogs] = useState([]);
//   const [title, setTitle] = useState("");
//   const [excerpt, setExcerpt] = useState("");
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Fetch all blogs
//   const fetchBlogs = async () => {
//     const res = await axios.get("http://localhost:5000/api/blogs");
//     setBlogs(res.data);
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   // Create blog
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!title || !excerpt || !content || !image) {
//       alert("All fields are required");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("excerpt", excerpt);
//     formData.append("content", content);
//     formData.append("image", image);

//     try {
//       setLoading(true);
//       await axios.post("http://localhost:5000/api/blogs", formData,{
//         headers:{
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       alert("Blog added successfully!");
//       setTitle("");
//       setExcerpt("");
//       setContent("");
//       setImage(null);

//       fetchBlogs(); // refresh list
//     } catch (err) {
//       alert("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Delete blog
//   const deleteBlog = async (id) => {
//     if (!window.confirm("Delete this blog?")) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/blogs/${id}`);
//       fetchBlogs();
//       alert("Blog deleted");
//     } catch (err) {
//       alert("Delete failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       {/* CREATE BLOG */}
//       <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow mb-12">
//         <h2 className="text-2xl font-semibold mb-6 text-center">
//           Add New Blog
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Blog Title"
//             className="w-full border p-2 rounded"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />

//           <textarea
//             placeholder="Short description"
//             className="w-full border p-2 rounded"
//             rows="3"
//             value={excerpt}
//             onChange={(e) => setExcerpt(e.target.value)}
//           />

//           <textarea
//             placeholder="Full content"
//             className="w-full border p-2 rounded"
//             rows="6"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//           />

//           <input
//             type="file"
//             onChange={(e) => setImage(e.target.files[0])}
//           />

//           <button
//             type="submit"
//             className="w-full bg-black text-white py-2 rounded"
//           >
//             {loading ? "Publishing..." : "Publish Blog"}
//           </button>
//         </form>
//       </div>

//       {/* BLOG LIST */}
//       <h2 className="text-2xl font-semibold mb-6 text-center">
//         All Blogs
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {blogs.map((blog) => (
//           <div
//             key={blog._id}
//             className="bg-white rounded-lg shadow overflow-hidden"
//           >
//             <img
//               src={blog.image.url}
//               className="h-60 w-full object-cover"
//               alt=""
//             />

//             <div className="p-4">
//               <h3 className="font-semibold text-lg">{blog.title}</h3>
//               <p className="text-sm text-gray-500 mb-3">
//                 {new Date(blog.createdAt).toISOString().split("T")[0]}
//               </p>

//               <button
//                 onClick={() => deleteBlog(blog._id)}
//                 className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminBlog() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🔐 Protect page
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  // Fetch blogs
  const fetchBlogs = async () => {
    const res = await axios.get("http://localhost:5000/api/blogs");
    setBlogs(res.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Create blog
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !excerpt || !content || !image) {
      alert("All fields required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("excerpt", excerpt);
    formData.append("content", content);
    formData.append("image", image);

    try {
      setLoading(true);
      await axios.post(
        "http://localhost:5000/api/blogs",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("Blog added");
      setTitle("");
      setExcerpt("");
      setContent("");
      setImage(null);
      fetchBlogs();
    } catch {
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  // Delete blog
  const deleteBlog = async (id) => {
    if (!window.confirm("Delete blog?")) return;

    await axios.delete(
      `http://localhost:5000/api/blogs/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    fetchBlogs();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Blog</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full border p-2"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="w-full border p-2"
            placeholder="Excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
          />

          <textarea
            className="w-full border p-2"
            placeholder="Content"
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <input type="file" onChange={(e) => setImage(e.target.files[0])} />

          <button className="w-full bg-black text-white py-2">
            {loading ? "Publishing..." : "Publish"}
          </button>
        </form>
      </div>

      <h2 className="text-2xl font-bold text-center my-10">All Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white rounded shadow">
            <img src={blog.image.url} className="h-56 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-bold">{blog.title}</h3>
              <button
                onClick={() => deleteBlog(blog._id)}
                className="mt-3 bg-red-600 text-white px-4 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
