import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
const GalleryPages = () => {
  const images = useLoaderData();
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        {images.map((e, i) => {
          return (
            <div
              key={i}
              className="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer"
              onClick={() => setSelectedImage(e)}
            >
              <img
                className=" md:w-full w-36 object-contain hover:scale-110 duration-200 ease-linear "
                src={e.download_url}
                alt={e.author}
                title={e.author}
              />
            </div>
          );
        })}
      </div>
      {selectedImage && (
        <div
          className=" fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className=" md:w-1/2 w-3/4 bg-white/80 cursor-pointer p-5  rounded-lg flex flex-col items-center justify-center "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-bold text-xl mb-2">
              <h1 className=" text-amber-700">{selectedImage.author}</h1>
            </div>
            <img
              src={selectedImage.download_url}
              alt={selectedImage.author}
              className=" lg:w-3/4 w-full object-contain my-2 rounded-md  shadow-lg"
            />
            <span className=" md:text-xl text-xs font-semibold text-center ">
              <h5>
                Go to image:{" "}
                <a
                  href={selectedImage.url}
                  target="blank"
                  className="text-blue-600 underline  "
                >
                  {selectedImage.url}
                </a>
              </h5>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPages;

export const fetchData = async () => {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=2&limit=200"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(
      "There was a problem with the fetch operation: " + error.message
    );
  }
};
