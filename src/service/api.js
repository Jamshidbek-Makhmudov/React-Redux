import axios from "axios"
import { getItem } from "../helper/persistanceStorage"
axios.defaults.baseURL = "http://localhost:3000/api"
axios.interceptors.request.use((config) => {
  const token = getItem("token")
  const authorization = token ? `Token ${token}` : ""
  config.headers.Authorization = authorization
  return config
}) // biz xozir manashu interseption orqali api dagi tokenni shu yerga berib qoydik endi buni xoxlagan joyda ishlatsek boladi.
export default axios
