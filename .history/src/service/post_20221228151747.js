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
    return this.getAll({ per_page: 3,
      page: 1,})
  },

  getArticlesPopular(){
    return this.getAll({ per_page: 3,
      page: 1, orderby: 'post_views',})
  },
  getArticlesGeneral(page = 1){
    return this.getAll({ per_page: 3,
      page,})
    return API.call().get('/wp/v2/posts', {
      params: {
        per_page: 2,
        page,
        lang: 'vi'
      }
    })
  },

  getArticlesSearch(search, page = 1){
    return API.call().get('/wp/v2/posts', {
      params: {
        per_page: 3,
        page,
        search,
        lang: 'vi'
      }
    })
  },
}


// ?per_page=2&page=1&lang=vi
export default postService;