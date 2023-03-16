import { ACT_FETCH_COMMENTS_CHILD, ACT_FETCH_COMMENTS_PARENT, ACT_FETCH_NEW_ITEM } from "./actions";


const initState = {
  commentsPaging: {
    list: [],
    currentPage: 1,
    totalPages: 1,
    total: 0,
  },
  commentsChildData: {},
  commentsNewItem: {
    authorId,
    content,
    postId,
    parent,
  }
};

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_COMMENTS_PARENT:
      return {
        ...state,
        commentsPaging: {
          list:
            action.payload.currentPage === 1
              ? action.payload.comments
              : [...state.commentsPaging.list, ...action.payload.comments],
          currentPage: action.payload.currentPage,
          totalPages: action.payload.totalPages,
          total: action.payload.total,
        },
      };
    case ACT_FETCH_COMMENTS_CHILD:
      return {
        ...state,
        commentsChildData: {
          ...state.commentsChildData,
          [action.payload.parent]: {
            list:
              action.payload.currentPage === 1
                ? action.payload.comments
                : [...state.commentsChildData[action.payload.parent].list, ...action.payload.comments],
            currentPage: action.payload.currentPage,
            totalPages: action.payload.totalPages,
            total: action.payload.total,
          },
        },
      };
      case ACT_FETCH_NEW_ITEM:
      return {
        ...state,
        commentsNewItem: 
          action.payload.currentPage === 1
            ? action.payload.authorId
            : [...state.commentsPaging, ...action.payload.comments],
      };
    default:
      return state;
  }
}

export default reducer;
