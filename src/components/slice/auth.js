import { createSlice } from "@reduxjs/toolkit"
import { setItem } from "../../helper/persistanceStorage"
const initialState = {
  isLoading: false, //bu bizga serverga sorov yuborganimizga kerka boladi.
  loggedIn: false, // bu bizda foydalanuchi royhatda bormi, yoqmi dasturga kirganmi yoqmi shuni tekshirish uchun kerak boladi.
  error: null,
  user: null, //bu foydalanuvchini ma'lumotlari bo'ladi.
}
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //login and register
    signUserStart: (state) => {
      state.isLoading = true
    },
    signUserSuccess: (state, action) => {
      state.loggedIn = true
      state.isLoading = false
      state.user = action.payload // action.payload da usrni ma'lumotlari keladi
      //success bolganda shu malumotlardagi tokenni local storagega saqlashimiz kerak
      setItem("token", action.payload.token)
      // localStorage.setItem("token", action.payload.token) //biz bu tokenlarni helperda papkada optimizatsiya qilamiz
      //biz bu local storagedagi tokenlarimizni apiga post qilib kelgan responseni ovosek local storageda saxranit bolib qoladi
    },
    signUserFailure: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    logoutUser: (state) => {
      state.user = null
      state.loggedIn = false
    },
    // buyedagi functionlarni ishga tushirish uchun boshqa componentlarda useDispatchni reduxdan olib shuni ichida ishlatiah kerak boladi
  },
})
export const { signUserStart, signUserSuccess, signUserFailure, logoutUser } =
  authSlice.actions
export default authSlice.reducer
