// import express from "express";
// import multer from "multer";
// import cloudinary from "../cloudinary.js";
// import Photo from "../models/Photo.js";

// const router = express.Router();

// const upload = multer({
//   dest: "uploads/",
//   limits: { fileSize: 10 * 1024 * 1024 } // 20MB
// });

// // Get photos of an album
// router.get("/album/:albumId", async (req, res) => {
//   try {
//     const photos = await Photo.find({ albumId: req.params.albumId }).sort({ createdAt: -1 });
//     res.json(photos);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Upload photo to album
// router.post("/:albumId", upload.single("image"), async (req, res) => {
//   try {
//     const result = await cloudinary.uploader.upload(req.file.path, {
//       folder: `albums/${req.params.albumId}`
//     });

//     const photo = await Photo.create({
//       albumId: req.params.albumId,
//       url: result.secure_url,
//       publicId: result.public_id
//     });

//     res.json(photo);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;

import express from "express";
import multer from "multer";
import cloudinary from "../cloudinary.js";
import Photo from "../models/Photo.js";

const router = express.Router();

const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 10 * 1024 * 1024 } // 20MB
});

// Get photos of an album
router.get("/album/:albumId", async (req, res) => {
  try {
    const photos = await Photo.find({ albumId: req.params.albumId }).sort({ createdAt: -1 });
    res.json(photos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Upload photo to album
router.post("/:albumId", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: `albums/${req.params.albumId}`
    });

    const photo = await Photo.create({
      albumId: req.params.albumId,
      url: result.secure_url,
      publicId: result.public_id
    });

    res.json(photo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
