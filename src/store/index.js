//reducerdagi kodlarni shu yerga jamlab shu yerdan export qilamiz.
//slice papkadagilarni shu yerda configuratsiya qilishimiz kerak boladi
import { configureStore } from "@reduxjs/toolkit"
import AuthReducer from "../components/slice/auth" //esingda tursin importdan keyingi yozilgan nomni ozing xoxlagan nomni berasan,  fromdan chaqirvotgan componentni shu nomga tenglab qoyasan degani
import ArticleReducer from "../components/slice/article"
export default configureStore({
  reducer: {
    auth: AuthReducer, // auth: ni yozishimiz ciroy uchun shunchaki authReducerni yozib qoysa ha, boladi.
    article: ArticleReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  // bu redux devTool ni reduc toolkits bilna connetc qilish uchun kerak
})
//token bu foydalanuvchini kodi uni ichida payload aynan bizga kerakrli bolgan foydalanuvhnini ma'lumotlarini oz
//ichiga qabul qiladi.
// biz register yoki login qilinganda userni malumotlari update render bolganda ochib ketmasligi uchun
//uni browserda saqlashimiz kerak
// browserni inspect qilsak aplicationda cookies yoki Local Storgae, yoki session storageda saqlasak boladi
// bularni farqi local storage da user malumotlari saqlani sessionda esa malumotlar qncha vaqt saqlanishini kiritiladi
//cookie bolsa ozgina funkiyalari koproq ya'mni unda domain, qachon ochib ketishi(ma'lumotni), size,secure taraflari
//intersepsiya bu local storagedago tokenlar orqali api dagi ma'lumotlarni headerga chiqarishga aytiladi.
//navigatsiya bu logedIn true bolganda foylanuvchini ismini yuqori navbarga chiqarib qoyishga aytiladi.
