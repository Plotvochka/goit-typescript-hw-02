import Modal from "react-modal";
import css from "./ImageModal.module.css";
import React from "react";
import { Image } from "../types";

Modal.setAppElement("#root");

type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  image?: Image | null;
};

const ImageModal = ({ isOpen, onClose, image }: ImageModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.container}
      overlayClassName={css.overlay}
    >
      <div>
        <img
          src={image?.urls.full}
          alt={image?.alt_description || "Image"}
          className={css.img}
        />
        <p>Author: {image?.user.name}</p>
        <p>Likes: {image?.likes}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default ImageModal;
