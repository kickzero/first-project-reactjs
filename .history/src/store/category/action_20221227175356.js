import { mappingPostData } from "../../helper";
import postService from "../../service/post";

// action type
export const ACT_FETCH_ARTICLES_LATEST = 'ACT_FETCH_ARTICLES_LATEST';
export const ACT_FETCH_ARTICLES_POPULAR = 'ACT_FETCH_ARTICLES_POPULAR';
export const ACT_FETCH_ARTICLES_GENERAL = 'ACT_FETCH_ARTICLES_GENERAL';

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

//action creator
export function actFetchArticlePolular(posts) {
  return {
    type: ACT_FETCH_ARTICLES_POPULAR,
    payload: {
      posts,
    }
  }
}

//snake_case
// action async
export function actFetchArticlePolularAsync(){
  return async (dispatch) => {
    const response = await postService.getArticlesPopular();
    const data = response.data;
    const posts = data.map(mappingPostData);
    dispatch(actFetchArticlePolular(posts));
  }
}

//action creator
export function actFetchArticleGeneral(posts, page, totalPage) {
  return {
    type: ACT_FETCH_ARTICLES_GENERAL,
    payload: {
      posts,
      page, 
      totalPage
    }
  }
}

//snake_case
// action async
export function actFetchArticleGeneralAsync(page = 1){
  return async (dispatch) => {
    const response = await postService.getArticlesGeneral(page);
    const data = response.data;
    const posts = data.map(mappingPostData);
    const totalPage = response.headers['x-wp-totalpages']
    dispatch(actFetchArticleGeneral(posts, page, totalPage));
  }
}