import express from "express";
import upload from "../Middleware/upload.js";
import { getCloudinaryImages, updateCloudinaryImages, uploadImage } from "../Controllers/imageController.js";


export const router = express.Router();

router.post("/upload", upload.single("pdf"), uploadImage);

router.get("/images", getCloudinaryImages);

router.put("/update/:id",upload.single("pdf"), updateCloudinaryImages);




