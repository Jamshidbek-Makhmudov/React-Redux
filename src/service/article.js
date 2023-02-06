import axios from "./api"
//bu component api dagi article lar bn ishlash uchun kerak
const ArticleService = {
  async getArticles() {
    const response = await axios.get("./articles")
    return response.data
  },
}
export default ArticleService
