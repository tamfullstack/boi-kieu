import { configureStore } from "@reduxjs/toolkit";
import boiKieuReducer from "./boiKieu";

const store = configureStore({ reducer: { boiKieu: boiKieuReducer } });

export default store;
