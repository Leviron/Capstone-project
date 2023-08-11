import React, { useState } from "react";
import Image from "next/image";

export default function Upload() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  async function submitImage(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    console.log(event.target);

    try {
      const response = await fetch("/api/uploads/upload", {
        method: "post",
        body: formData,
      });
      const img = await response.json();

      //console.log("Browser: response from API: ", img);

      setImage(img);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <>
      {image && (
        <div>
          <Image
            src={image.url}
            alt="Uploaded image"
            height={image.height}
            width={image.width}
          />
        </div>
      )}
      {error && <div>{error.message}</div>}
      <form onSubmit={submitImage}>
        <input type="file" name="file" />
        <button type="submit">Upload</button>
      </form>
    </>
  );
}
