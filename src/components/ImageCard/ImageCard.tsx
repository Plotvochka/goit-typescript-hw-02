import React from "react";
import { Image } from "../types";
import css from "./ImageCard.module.css";

type ImageCardProps = {
  image: Image;
  onImageClick: (image: Image) => void;
};

export default function ImageCard({ image, onImageClick }: ImageCardProps) {
  const handleClick = () => {
    onImageClick(image);
  };
  return (
    <div onClick={handleClick} className={css.container}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Image"}
        className={css.img}
      />
    </div>
  );
}
