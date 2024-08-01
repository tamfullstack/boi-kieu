import React from "react";
import BanPhim from "./BanPhim/BanPhim";
import styles from "./Ten.module.css";
import { useSelector } from "react-redux";

export default function Ten({ isMale }) {
  const { tenNam, tenNu } = useSelector((state) => state.boiKieu);

  return (
    <div className={`${styles.ten} ${styles[isMale ? "nam" : "nu"]}`}>
      <h2>TÊN BẠN {isMale ? "NAM" : "NỮ"}</h2>
      <div className={styles["ten-dang-nhap"]}>
        <h1>{isMale ? tenNam : tenNu}</h1>
      </div>
      <BanPhim isMale={isMale} />
    </div>
  );
}
