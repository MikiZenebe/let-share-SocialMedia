import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImg = async (file) => {
  if (file) {
    const uploadedResponse = await cloudinary.uploader.upload(file);
    file = uploadedResponse.secure_url;
  }
};

export default uploadImg;
