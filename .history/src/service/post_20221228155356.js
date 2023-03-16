import API from "./api"

const postService = {
  getAll(inputParams = {}){
    return API.call().get('/wp/v2/posts', {
      params: {
        ...inputParams,
        lang: 'vi'
      }
    })
  },
  getArticlesLatest(){
    return this.getAll({ per_page: 3, page: 1,})
  },

  getArticlesPopular(){
    return this.getAll({ per_page: 3, page: 1, orderby: 'post_views',})
  },
  getArticlesGeneral(page = 1){
    return this.getAll({ per_page: 2, page,})
  },

  getArticlesSearch(search, page = 1){
    return this.getAll({ per_page: 1, page, search,})
  },
}


export default postService;