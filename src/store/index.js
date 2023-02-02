//reducerdagi kodlarni shu yerga jamlab shu yerdan export qilamiz.
import AuthReducer from "../components/slice/auth"
import { configureStore } from "@reduxjs/toolkit"

export default configureStore({
  reducer: {
    auth: AuthReducer, // auth: ni yozishimiz ciroy uchun shunchaki authReducerni yozib qoysa ha, boladi.
  },
  devTools: process.env.NODE_ENV !== "production",
  // bu redux devTool ni reduc toolkits bilna connetc qilish uchun kerak
})
