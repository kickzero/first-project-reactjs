import { mappingPostData } from "../../helper";
import postService from "../../service/post";

// action type
export const ACT_FETCH_ARTICLES_LATEST = 'ACT_FETCH_ARTICLES_LATEST';

//action creator
export function actFetchArticleLatest(posts) {
  return {
    type: ACT_FETCH_ARTICLES_LATEST,
    payload: {
      posts,
    }
  }
}

//snake_case
// action async
export function actFetchArticleLatestAsync(){
  return async (dispatch) => {
    const response = await postService.getArticlesLatest();
    const data = response.data;
    const posts = data.map(mappingPostData);
    dispatch(actFetchArticleLatest(posts));
  }
}

