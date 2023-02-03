import axios from "./api"

const authService = {
  async userRegister(user) {
    const { data } = await axios.post("/users", { user }) // buyersa response orniga derstrubtizatsiya qilib {data }qilib yozib qoysak ham boladi
    return data
  },
  async userLogin(user) {
    const { data } = await axios.post("/users/login", { user })
    return data
  },
  async getUser() {
    // const response = await axios.get("/users")
    // return response
  },
}

export default authService
