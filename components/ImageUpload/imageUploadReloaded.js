import React, { useState } from "react";

const ImageUploadReloaded = ({ setRecipeImageUrl }) => {
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");

  const selectFile = (event) => {
    event.preventDefault();
    setCurrentFile(event.target.files[0]);
    setProgress(0);
    setError("");
  };

  const upload = async () => {
    setProgress(0);
    console.log("UPLOAD TO CLOUDINARY");

    let formData = new FormData();
    formData.append("file", currentFile);

    try {
      const response = await fetch("/api/uploads/upload", {
        method: "post",
        body: formData,
      });
      const img = await response.json();

      console.log("Browser: response from API: ", img);

      if (img.url) {
        console.log("IMAGE URL", img.url);
        setRecipeImageUrl(img.url); // Hier wird die Bild-URL an die übergebene Funktion übergeben

        // Speichern Sie die Bild-URL auch in Ihrer Datenbank
        try {
          const dbResponse = await fetch("/api/recipes/updateImageUrl", {
            method: "post",
            body: JSON.stringify({ imageUrl: img.url }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          const dbData = await dbResponse.json();
          console.log("Response from DB:", dbData);
        } catch (dbError) {
          setError(dbError);
        }
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-8">
          <label htmlFor="fileUpload" className="btn btn-default p-0">
            <input
              id="fileUpload"
              type="file"
              accept="image/*"
              onChange={selectFile}
            />
          </label>
        </div>

        <div className="col-4">
          <button
            className="btn btn-success btn-sm"
            disabled={!currentFile}
            onClick={upload}
          >
            Upload
          </button>
        </div>
      </div>
      <div>
        {/* <img className="preview" src={imageUrl} alt="" /> */}
        <p>{imageUrl || "No image upladed yet"}</p>
      </div>

      {message && (
        <div className="alert alert-secondary mt-3" role="alert">
          {message}
        </div>
      )}

      {error && (
        <div className="alert alert-secondary mt-3" role="alert">
          {JSON.stringify(error)}
        </div>
      )}
    </div>
  );
};

export default ImageUploadReloaded;
