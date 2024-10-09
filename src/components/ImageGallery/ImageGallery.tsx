import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import React from "react";
import { Image } from "../types";

type ImageGalleryProps = {
  images: Image[];
  handleImageClick: (image: Image) => void;
  // openModal: () => void;
};

export default function ImageGallery({
  images,
  handleImageClick,
}: ImageGalleryProps) {
  return (
    <ul className={css.ul}>
      {images.map((image) => (
        <li key={image.id} className={css.parent}>
          <ImageCard image={image} onImageClick={handleImageClick} />
        </li>
      ))}
    </ul>
  );
}
