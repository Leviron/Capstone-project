// import React, { useState, useEffect } from "react";

// const ImageUploadReloaded = (setRecipeImageUrl) => {
//   const [currentFile, setCurrentFile] = useState(undefined);
//   const [previewImage, setPreviewImage] = useState(undefined);
//   const [progress, setProgress] = useState(0);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const [imageUrl, setImageUrl] = useState("");

//   const selectFile = (event) => {
//     event.preventDefault();

//     setCurrentFile(event.target.files[0]);
//     setPreviewImage(URL.createObjectURL(event.target.files[0]));
//     setProgress(0);
//     setMessage("");
//   };

//   const upload = async () => {
//     setProgress(0);
//     console.log("UPLOAD TO CLOUDINARY");
//     console.log("currentFile", currentFile);

//     let formData = new FormData();
//     formData.append("file", currentFile);

//     try {
//       const response = await fetch("/api/uploads/upload", {
//         method: "post",
//         body: formData,
//       });
//       const img = await response.json();

//       console.log("Browser: response from API: ", img);

//       if (img.url) {
//         console.log("IMAGE URL", img.url);
//         setImageUrl(img.url);
//         setRecipeImageUrl(img.url);
//       }
//     } catch (error) {
//       setError(error);
//     }
//   };

//   return (
//     <div>
//       <div className="row">
//         <div className="col-8">
//           <label htmlFor="fileUpload" className="btn btn-default p-0">
//             <input
//               id="fileUpload"
//               type="file"
//               accept="image/*"
//               onChange={selectFile}
//             />
//           </label>
//         </div>

//         <div className="col-4">
//           <button
//             className="btn btn-success btn-sm"
//             disabled={!currentFile}
//             onClick={upload}
//           >
//             Upload
//           </button>
//         </div>
//       </div>

//       <div>
//         {/* <img className="preview" src={imageUrl} alt="" /> */}
//         <p>{imageUrl || "No image upladed yet"}</p>
//       </div>

//       {message && (
//         <div className="alert alert-secondary mt-3" role="alert">
//           {message}
//         </div>
//       )}

//       {error && (
//         <div className="alert alert-secondary mt-3" role="alert">
//           {JSON.stringify(error)}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageUploadReloaded;

import React, { useState } from "react";

function ImageUploadReloaded({ setRecipeImageUrl }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setRecipeImageUrl(imageUrl);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && <img src={selectedImage} alt="Uploaded" />}
    </div>
  );
}

export default ImageUploadReloaded;
