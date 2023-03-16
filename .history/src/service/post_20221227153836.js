import API from "./api"

const postService = {
  getArticlesLatest(){
    return API.call().get('/wp/v2/posts')
  },
}
// ?per_page=2&page=1&lang=vi
export default postService;