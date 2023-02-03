import { createSlice } from "@reduxjs/toolkit"
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
      state.user = action.payload
    },
    signUserFailure: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})
export const { signUserStart, signUserSuccess, signUserFailure } =
  authSlice.actions
export default authSlice.reducer
