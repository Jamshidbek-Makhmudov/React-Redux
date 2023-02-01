//contex api da 1ta reducer boladi, reduxda koplab reducerlar boladi
import { createSlice } from "@reduxjs/toolkit" //bu bizga reducer tuzuib beradi
export const countSlice = createSlice({
    name: "count", //bu countSliceni nomi useSelector hookini ishlatganimizda state nomini ozi topib oladi
    initialState: {
        count: 0,
    },
    reducers: {
        //bular actionlarimiz, tashqari useDispatch tuzib oshani ichida bu actionlarni ishlatamiz
        plusCounter: (state, payload) => {
            state.count += 1
        },
        minusCounter: (state, payload) => {
            if (state > 0) {
                state.count -= 1
            }
        },
        resetCounter: (state, payload) => {
            state.count = 0
        },
    },
})
export const { plusCounter, minusCounter, resetCounter } = countSlice.actions
export default countSlice.reducer