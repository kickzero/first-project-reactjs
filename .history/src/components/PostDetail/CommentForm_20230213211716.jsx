import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchNewItemAsync } from '../../store/comment/actions';
import Button from '../shared/Button';

function CommentForm(props) {
  const {parentId, showForm=true} = props;
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.USER.currentUser);
  const postId = useSelector(state => state.POST.articlesDetail?.id);
  const [loading, setLoading] = useState(false);

  const [content, setContent] = useState('');

  function handleChange(event) {
    setContent(event.target.value);
  }

  function handleSubmit() {
    setLoading(true);
    const data = {
      author: currentUser.id,
      content,
      post: postId,
      parent: parentId 
    };
    dispatch(actFetchNewItemAsync(data)).then((res) => {
        setLoading(false);
    })
  }
  
  if( !currentUser ) return (
    <p>Vui lòng <Link to="/login">Đăng nhập</Link> để bình luận</p>
  );
  
  return (
    <div className="comments__form">
      <div className="comments__form--control">
        <div className="comments__section--avatar">
          <a href="/">
            <img src="/assets/images/avatar1.jpg" alt="" />
          </a>
        </div>
        <textarea name="comment" onChange={handleChange}/>
      </div>
      <div className="text-right">
        <Button onClick={handleSubmit} loading={loading}>Bình luận</Button> 
      </div>
    </div>
  );
}

export default CommentForm;
