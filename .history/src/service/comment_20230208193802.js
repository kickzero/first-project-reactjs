import API from './api';

const commentService = {
  getList({ page = 1, per_page = 5, post = null, parent = 0 }) {
    return API.call().get('/wp/v2/comments', {
      params: {
        per_page,
        page,
        post,
        parent,
        order: 'asc',
      },
    });
  },
  addNewItem( authorId, content, postId, parent = 0 ){
    return API.call().get('/wp/v2/comments', {
      id: authorId, 
      content: content, 
      post: postId, 
      parent: parent
    })
  }
};

export default commentService;
