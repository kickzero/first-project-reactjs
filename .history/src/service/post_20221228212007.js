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
  getArticlesLatest() {
    return this.getAll({ per_page: 3, page: 1,})
  },

  getArticlesPopular() {
    return this.getAll({ per_page: 3, page: 1, orderby: 'post_views',})
  },

  getArticlesPaging(page = 1, extrasParam) {
    return this.getAll({ page, ...extrasParam})
  },

  getArticlesSearch(search, page = 1) {
    return this.getAll({ per_page: 2,  search, page,})
  },
  getArticleDetail(slug) {
    return this.getAll({ slug })
  },
  getArticleRelated(author, exclude) {
    return this.getAll({ per_page: 3, page: 1, author, exclude })
  },
}


export default postService;