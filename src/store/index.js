//reducerdagi kodlarni shu yerga jamlab shu yerdan export qilamiz.
import { configureStore } from "@reduxjs/toolkit"
import countReducer from "../components/reducer/CountSlice"
export default configureStore({
    reducer: {
        reducer: countReducer,
        devTools: process.env.NODE_ENV !== "production",
        // bu redux devTool ni reduc toolkits bilna connetc qilish uchun kerak
    },
})