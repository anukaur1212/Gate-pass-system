// import multer from "multer";
// import { CloudinaryStorage } from "multer-storage-cloudinary-v2";
// import cloudinary from "../config/cloudinary.js";

// const storage = new CloudinaryStorage({
//     cloudinary,
//     params: {
//         folder: "gate-pass-system",
//         resource_type: "auto"
//     }
// });

// const upload = multer({
//     storage,
//     limits: {
//         fileSize: 50 * 1024 * 1024
//     }
// });

// export default upload;



import multer from "multer";

const storage = multer.memoryStorage()

const upload = multer({
    storage,
    limits:{
        fileSize:10*1024*1024
    }
});

export default upload
