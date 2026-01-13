import express from "express";
import Album from "../models/Album.js";
import multer from "multer";
import cloudinary from "../cloudinary.js";
import Photo from "../models/Photo.js";


const router = express.Router();

const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 10 * 1024 * 1024 } // 20MB
});

// Create album
router.post("/", async (req, res) => {
  try {
    const { title } = req.body;

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const album = await Album.create({ title, slug });
    res.json(album);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Upload album cover
router.post("/:id/cover", upload.single("image"), async (req, res) => {
  try {
    if(!req.file){
        return res.status(400).json({error:"NO file recived"})
    }
    const album = await Album.findById(req.params.id);

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: `covers/${album._id}`
    });

    album.coverUrl = result.secure_url;
    album.coverPublicId = result.public_id;
    await album.save();

    res.json(album);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Get all albums
router.get("/", async (req, res) => {
  const albums = await Album.find().sort({ createdAt: -1 });
  res.json(albums);
});


router.delete("/:id", async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);
    if (!album) return res.status(404).json({ error: "Album not found" });

    // Delete cover from Cloudinary
    if (album.coverPublicId) {
      await cloudinary.uploader.destroy(album.coverPublicId);
    }

    // Find all photos
    const photos = await Photo.find({ albumId: album._id });

    // Delete each photo from Cloudinary
    for (const photo of photos) {
      await cloudinary.uploader.destroy(photo.publicId);
    }

    // Remove photos from DB
    await Photo.deleteMany({ albumId: album._id });

    // Remove album
    await Album.findByIdAndDelete(album._id);

    res.json({ success: true });
  } catch (err) {
    console.error("Delete album error:", err);
    res.status(500).json({ error: err.message });
  }
});
export default router;
