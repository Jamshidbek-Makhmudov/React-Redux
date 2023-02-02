import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  isLoading: false, //bu bizga serverga sorov yuborganimizga kerka boladi.
  loggedIn: false, // bu bizda foydalanuchi royhatda bormi, yoqmi dasturga kirganmi yoqmi shuni tekshirish uchun kerak boladi.
  user: null, //bu foydalanuvchini ma'lumotlari bo'ladi.
}
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUserStart: (state) => {
      state.isLoading = true
    }, // foydalanuvhi royhatdan otagoyganda userstart oxshasha nimadir, oxshamasa nimadir bajaramiz
    loginUserSuccess: (state) => {}, //state bu tepadagi initialStatedan keladi.
    loginUserFailure: (state) => {},
  },
})
export const { loginUserStart } = authSlice.actions
export default authSlice.reducer
