// import express from "express";
// import multer from "multer";
// import cloudinary from "../cloudinary.js";
// import Photo from "../models/Photo.js";
// import auth from "../middleware/auth.js";

// const router = express.Router();

// const upload = multer({
//   dest: "uploads/",
//   limits: { fileSize: 50 * 1024 * 1024 }
// });

// /* ----------- PUBLIC ----------- */

// // Website → load album photos
// router.get("/album/:albumId", async (req, res) => {
//   const photos = await Photo.find({ albumId: req.params.albumId }).sort({ createdAt: -1 });
//   res.json(photos);
// });


// /* ----------- ADMIN ----------- */

// // Upload photo to album
// router.post("/:albumId", auth, (req, res) => {

//   upload.array("images", 20)(req, res, async (err) => {

//     if (err) {
//       return res.status(400).json({ error: err.message });
//     }

//     try {

//       if (!req.files || req.files.length === 0)
//         return res.status(400).json({ error: "No files uploaded" });

//       const uploads = req.files.map(file =>
//         cloudinary.uploader.upload(file.path, {
//           folder: `albums/${req.params.albumId}`
//         })
//       );

//       const results = await Promise.all(uploads);

//       const photos = await Promise.all(
//         results.map(result =>
//           Photo.create({
//             albumId: req.params.albumId,
//             url: result.secure_url,
//             publicId: result.public_id
//           })
//         )
//       );

//       res.json(photos);

//     } catch (err) {

//       console.error(err);
//       res.status(500).json({ error: err.message });

//     }

//   });

// });

// export default router;


import express from "express";
import multer from "multer";
import fs from "fs";
import cloudinary from "../cloudinary.js";
import Photo from "../models/Photo.js";
import auth from "../middleware/auth.js";

const router = express.Router();

const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 50 * 1024 * 1024 }
});

/* ----------- PUBLIC ----------- */

router.get("/album/:albumId", async (req, res) => {

  const photos = await Photo
    .find({ albumId: req.params.albumId })
    .sort({ createdAt: -1 });

  res.json(photos);

});

/* ----------- ADMIN ----------- */

router.post("/:albumId", auth, (req, res) => {

  upload.array("images", 20)(req, res, async (err) => {

    if (err)
      return res.status(400).json({ error: err.message });

    try {

      if (!req.files || req.files.length === 0)
        return res.status(400).json({ error: "No files uploaded" });

      const uploads = req.files.map(async (file) => {

        const result = await cloudinary.uploader.upload(
          file.path,
          { folder: `albums/${req.params.albumId}` }
        );

        fs.unlinkSync(file.path);

        return result;

      });

      const results = await Promise.all(uploads);

      const photos = await Promise.all(
        results.map(result =>
          Photo.create({
            albumId: req.params.albumId,
            url: result.secure_url,
            publicId: result.public_id
          })
        )
      );

      res.json(photos);

    } catch (err) {

      console.error(err);
      res.status(500).json({ error: err.message });

    }

  });

});

export default router;