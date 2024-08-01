import React, { useEffect } from "react";
import Ten from "./Ten/Ten";
import styles from "./BoiKieu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { xemQue } from "../store/boiKieu";

export default function BoiKieu() {
  const { tenNam, tenNu, ketQua } = useSelector((state) => state.boiKieu);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(xemQue());
  }, [tenNam, tenNu, dispatch]);

  const renderKetQua = () => {
    if (!ketQua) {
      return <h5>Vui lòng nhập tên để xem quẻ!</h5>;
    }

    const renderQueBoi = () => {
      return ketQua.split("\n").map((item, index) => {
        return (
          <p className="text-primary" key={index}>
            {item}
          </p>
        );
      });
    };

    return (
      <div className={styles["que-boi"]}>
        <div>{renderQueBoi()}</div>
      </div>
    );
  };

  return (
    <div className={`container-fluid ${styles["boi-kieu"]}`}>
      <h1 className="text-center text-danger pt-5 pb-5">BÓI KIỀU TÌNH DUYÊN</h1>
      <div className="row">
        <div className="col-6">
          <Ten isMale />
        </div>
        <div className="col-6">
          <Ten />
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-center text-danger">QUẺ BÓI</h2>
        <div className="pt-5 pb-5 text-center">{renderKetQua()}</div>
      </div>
    </div>
  );
}
