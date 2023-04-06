import { mappingPostData } from "../../helper";
import postService from "../../service/post";
import { actFetchCommentsParentAsync } from '../comment/actions';

// action type
export const ACT_FETCH_ARTICLES_LATEST = 'ACT_FETCH_ARTICLES_LATEST';
export const ACT_FETCH_ARTICLES_POPULAR = 'ACT_FETCH_ARTICLES_POPULAR';
export const ACT_FETCH_ARTICLES_PAGING = 'ACT_FETCH_ARTICLES_PAGING';
export const ACT_FETCH_ARTICLE_DETAIL = 'ACT_FETCH_ARTICLE_DETAIL';
export const ACT_FETCH_ARTICLE_RELATED = 'ACT_FETCH_ARTICLE_RELATED';

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
export function actFetchArticlePaging(posts, page, totalPage, total) {
  return {
    type: ACT_FETCH_ARTICLES_PAGING,
    payload: {
      posts,
      page, 
      totalPage, 
      total
    }
  }
}

//snake_case
// action async
export function actFetchArticlePagingAsync(page = 1, extrasParam = {}){
  return async (dispatch) => {
    const response = await postService.getArticlesPaging(page, extrasParam);
    const data = response.data;
    const posts = data.map(mappingPostData);
    const total = response.headers['x-wp-total'];
    const totalPage = response.headers['x-wp-totalpages'];
    dispatch(actFetchArticlePaging(posts, page, totalPage, total));
  }
}

//action creator
export function actFetchArticleDetail(post) {
  return {
    type: ACT_FETCH_ARTICLE_DETAIL,
    payload: {
      post,
    }
  }
}

//action creator
export function actFetchArticleRelated(post) {
  return {
    type: ACT_FETCH_ARTICLE_RELATED,
    payload: {
      post,
    }
  }
}

//snake_case
// action async
export function actFetchArticleDetailAsync(slug){
  return async (dispatch) => {
    const response = await postService.getArticleDetail(slug);
    const data = response.data[0];
    const post = mappingPostData(data);
    dispatch(actFetchArticleDetail(post));
    
    dispatch(actFetchCommentsParentAsync({ post: post.id }));

    const responseRelated = await postService.getArticleRelated(post.author, post.id);
    const postRelated = responseRelated.data.map(mappingPostData);
    dispatch(actFetchArticleRelated(postRelated));
  
  }
}
