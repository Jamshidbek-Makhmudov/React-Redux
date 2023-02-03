//reducerdagi kodlarni shu yerga jamlab shu yerdan export qilamiz.
import { configureStore } from "@reduxjs/toolkit"
import AuthReducer from "../components/slice/auth"

export default configureStore({
  reducer: {
    auth: AuthReducer, // auth: ni yozishimiz ciroy uchun shunchaki authReducerni yozib qoysa ha, boladi.
  },
  devTools: process.env.NODE_ENV !== "production",
  // bu redux devTool ni reduc toolkits bilna connetc qilish uchun kerak
})
//token bu foydalanuvchini kodi uni ichida payload aynan bizga kerakrli bolgan foydalanuvhnini ma'lumotlarini oz
//ichiga qabul qiladi.
//api bn ishlidigan ma'lumotlar yoziladi
