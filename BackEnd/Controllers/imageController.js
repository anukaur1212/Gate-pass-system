import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";
import { getData, getDatabyId, updateData, uploadData } from "../Models/CloudinaryModel.js";

// Update existing PDF
export const updateCloudinaryImages = async (req, res) => {
    try {
        const { id } = req.params;

        if (!req.file) {
            return res.status(400).json({
                status: false,
                message: "Please select a PDF"
            });
        }

        //  Get existing PDF's public_id from database
        const existing = await getDatabyId(id)

        if (!existing) {
            return res.status(404).json({
                status: false,
                message: "PDF not found"
            });
        }

        //  Upload new PDF using the same public_id
        const result = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                {
                    public_id: existing.public_id,
                    resource_type: "image",
                    type: "upload",
                    overwrite: true,
                    invalidate: true
                },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            ).end(req.file.buffer);
        });

        //  Update URL in database
        const updatedData = await updateData(id,result.secure_url)
      

        return res.status(200).json({
            status: true,
            message: "PDF updated successfully",
            data: updatedData
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        });
    }
};


// get data
export const getCloudinaryImages = async (req, res) => {
    try {
        const result = await getData();

        return res.status(200).json({
            status: true,
            data: result,
            message: "data fetched successfully"
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        });
    }
};


// to upload data
export const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                status: false,
                message: "Please select a file"
            });
        }

        const result = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                {
                    folder: "gate-pass-system",
                    resource_type: "image",
                    type: "upload"
                },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            ).end(req.file.buffer);
        });

        console.log(result);

        const savedData = await uploadData(
            result.secure_url,
            result.public_id
        );

        console.log(savedData);

        return res.status(200).json({
            status: true,
            message: "PDF uploaded successfully",
            data: savedData
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            status: false,
            message: error.message
        });
    }
};


