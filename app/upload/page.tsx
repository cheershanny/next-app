"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";
interface CloudinaryResult {
  public_id: string;
}

const Upload = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage
          width="500"
          height="500"
          src={publicId}
          alt="Uploaded picture"
        />
      )}
      <CldUploadWidget
        uploadPreset="uildaete"
        options={{
          sources: ["local", "url"],
          multiple: false,
          googleApiKey: "<image_search_google_api_key>",
          showAdvancedOptions: true,
          cropping: true,
          styles: {
            palette: {
              window: "#F5F5F5",
              sourceBg: "#FFFFFF",
              windowBorder: "#90a0b3",
              tabIcon: "#0094c7",
              inactiveTabIcon: "#69778A",
              menuIcons: "#0094C7",
              link: "#53ad9d",
              action: "#8F5DA5",
              inProgress: "#0194c7",
              complete: "#53ad9d",
              error: "#c43737",
              textDark: "#000000",
              textLight: "#FFFFFF",
            },
            fonts: {
              default: null,
              "'Poppins', sans-serif": {
                url: "https://fonts.googleapis.com/css?family=Poppins",
                active: true,
              },
            },
          },
        }}
        onSuccess={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default Upload;
