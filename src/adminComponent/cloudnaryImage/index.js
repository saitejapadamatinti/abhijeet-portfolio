import React, { useState } from "react";
import axios from "axios";
import { Image, CloudinaryContext } from "cloudinary-react";
import "./index.css"

const ImageUpload = () => {
    const cloudName = "di6dcxlcd"; // Replace with your Cloudinary cloud name
    const uploadPreset = "lseygnbe"; // Replace with your Cloudinary upload preset name

    const [selectedImage, setSelectedImage] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState("");
    const [uploading, setUploading] = useState(false);

    const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    const handleImageUpload = async () => {
        if (!selectedImage) {
            alert("Please select an image.");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedImage);
        formData.append("upload_preset", uploadPreset);

        setUploading(true);

        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
                formData
            );

            if (response.data.secure_url) {
                setUploadedImageUrl(response.data.secure_url);
                alert("Image uploaded successfully!");
            } else {
                alert("Error uploading image. Please try again later.");
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            alert("Error uploading image. Please try again later.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="image-upload-image">

            <h1>Image Upload</h1>
            <br />
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={handleImageUpload} disabled={uploading}>
                {uploading ? "Uploading..." : "Upload Image"}
            </button>
            {uploadedImageUrl && (
                <CloudinaryContext cloudName={cloudName}>
                    <Image publicId={uploadedImageUrl} width="300" />
                </CloudinaryContext>
            )}
            <br />
            <p>{uploadedImageUrl}</p>
        </div>
    );
};

export default ImageUpload;
