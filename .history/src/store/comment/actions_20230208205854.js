import { mappingCommentData } from '../../helper';
import commentService from '../../service/comment';

// action type
export const ACT_FETCH_COMMENTS_PARENT = 'ACT_FETCH_COMMENTS_PARENT';
export const ACT_FETCH_COMMENTS_CHILD = 'ACT_FETCH_COMMENTS_CHILD';
export const ACT_FETCH_NEW_ITEM = 'ACT_FETCH_NEW_ITEM';
export const ACT_FETCH_NEW_COMMENTS = 'ACT_FETCH_NEW_COMMENTS';

// action creator
export function actFetchCommentsParent({ comments, total, totalPages, currentPage }) {
  return {
    type: ACT_FETCH_COMMENTS_PARENT,
    payload: {
      comments,
      total,
      totalPages,
      currentPage,
    },
  };
}

export function actFetchCommentsChild({ comments, total, totalPages, currentPage, parent }) {
  return {
    type: ACT_FETCH_COMMENTS_CHILD,
    payload: {
      comments,
      total,
      totalPages,
      currentPage,
      parent,
    },
  };
}

export function actFetchNewComments(comments) {
  return {
    type: ACT_FETCH_NEW_COMMENTS,
    payload: {
      comments
    },
  };
}

export function actFetchNewItem({ authorId, content, postId, parent }) {
  return {
    type: ACT_FETCH_NEW_ITEM,
    payload: {
      authorId,
      content,
      postId,
      parent,
    },
  };
}

// action async
export function actFetchNewItemAsync({ author , content, post, parent = 0 }) {
  return async (dispatch) => {
    const response = await commentService.addNewItem({ author, content, post, parent });
    const comments = response.data.map(mappingCommentData);
    dispatch(actFetchNewComments( comments ));
    console.log(comments);
  };
}

// action async
export function actFetchCommentsParentAsync({ page = 1, post = null, parent = 0 }) {
  return async (dispatch) => {
    const response = await commentService.getList({ page, per_page: 5, post, parent });
    const comments = response.data.map(mappingCommentData);
    const total = parseInt(response.headers['x-wp-total']);
    const totalPages = parseInt(response.headers['x-wp-totalpages']);
    dispatch(actFetchCommentsParent({ comments, total, totalPages, currentPage: page }));
  };
}

export function actFetchCommentsChildAsync({ page = 1, post = null, parent = 0 }) {
  return async (dispatch) => {
    const response = await commentService.getList({ page, per_page: 3, post, parent });
    const comments = response.data.map(mappingCommentData);
    console.log('actFetchCommentsChildAsync - comments', comments);
    const total = parseInt(response.headers['x-wp-total']);
    const totalPages = parseInt(response.headers['x-wp-totalpages']);
    dispatch(actFetchCommentsChild({ comments, total, totalPages, currentPage: page, parent }));
  };
}
