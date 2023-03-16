import API from "./api"

const categoryService = {
  getArticlesLatest(){
    return API.call().get('/wp/v2/categories', {
      params: {
        per_page: 100,
        page: 1,
        lang: 'vi'
      }
    })
  },

  
}

export default categoryService;