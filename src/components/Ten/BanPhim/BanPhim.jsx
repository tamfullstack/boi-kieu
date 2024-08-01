import React from "react";
import styles from "./BanPhim.module.css";
import { useDispatch } from "react-redux";
import { nhapTen } from "../../../store/boiKieu";

export default function BanPhim({ isMale }) {
  const dispatch = useDispatch();

  const mangBanPhim = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "DELETE",
    "RESET",
  ];

  const handleNhapTen = (key) => {
    dispatch(nhapTen({ isMale, key }));
  };

  const renderBanPhim = () => {
    return mangBanPhim.map((phim) => {
      return (
        <button
          className={`${styles["ban-phim-item"]} btn btn-success`}
          key={phim}
          onClick={() => {
            handleNhapTen(phim);
          }}
        >
          {phim}
        </button>
      );
    });
  };

  return <div className={styles["ban-phim"]}>{renderBanPhim()}</div>;
}
