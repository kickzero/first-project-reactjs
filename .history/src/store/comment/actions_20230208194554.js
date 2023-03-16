import { mappingCommentData } from '../../helper';
import commentService from '../../service/comment';

// action type
export const ACT_FETCH_COMMENTS_PARENT = 'ACT_FETCH_COMMENTS_PARENT';
export const ACT_FETCH_COMMENTS_CHILD = 'ACT_FETCH_COMMENTS_CHILD';

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

export function actFetchNewItem({ authorId, content, postId, parent }) {
  return {
    type: ACT_FETCH_COMMENTS_CHILD,
    payload: {
      authorId,
      content,
      postId,
      parent,
    },
  };
}

// export function actFetchNewItemAsync({ page = 1, post = null, parent = 0 }) {
//   return async (dispatch) => {
//     const response = await commentService.getList({ page, per_page: 5, post, parent });
//     const comments = response.data.map(mappingCommentData);
//     const total = parseInt(response.headers['x-wp-total']);
//     const totalPages = parseInt(response.headers['x-wp-totalpages']);
//     dispatch(actFetchCommentsParent({ comments, total, totalPages, currentPage: page }));
//   };
// }

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
