import React from "react";
import css from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  onClick: () => void;
};

export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <button onClick={onClick} className={css.btn}>
      Load more
    </button>
  );
}
