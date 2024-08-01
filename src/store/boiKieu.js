import { createSlice } from "@reduxjs/toolkit";
import { chuyenTenThanhSo, mangQueBoi } from "../utils/boiKieu";

const initialState = {
  tenNam: "",
  tenNu: "",
  ketQua: "",
};

const boiKieuSlice = createSlice({
  name: "boiKieu",
  initialState,
  reducers: {
    nhapTen(state, { payload }) {
      if (payload.isMale) {
        let tenNamCapNhat;
        switch (payload.key) {
          case "RESET":
            tenNamCapNhat = "";
            break;

          case "DELETE":
            tenNamCapNhat = state.tenNam.slice(0, -1);
            break;

          default:
            tenNamCapNhat = state.tenNam + payload.key;
        }
        state.tenNam = tenNamCapNhat;
      } else {
        let tenNuCapNhat;
        switch (payload.key) {
          case "RESET":
            tenNuCapNhat = "";
            break;

          case "DELETE":
            tenNuCapNhat = state.tenNu.slice(0, -1);
            break;

          default:
            tenNuCapNhat = state.tenNu + payload.key;
        }
        state.tenNu = tenNuCapNhat;
      }
    },

    xemQue(state) {
      if (state.tenNam && state.tenNu) {
        const soDuocChuyen =
          chuyenTenThanhSo(state.tenNam) + chuyenTenThanhSo(state.tenNu);

        let soQue = soDuocChuyen;

        while (soQue >= 10) {
          let soQueTam = soQue;
          soQue = 0;

          while (soQueTam > 0) {
            soQue += soQueTam % 10;
            soQueTam = Math.floor(soQueTam / 10);
          }
        }

        state.ketQua = mangQueBoi[soQue - 1];
      } else {
        state.ketQua = "";
      }
    },
  },
});

export const { nhapTen, xemQue } = boiKieuSlice.actions;

const boiKieuReducer = boiKieuSlice.reducer;

export default boiKieuReducer;
