import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { actFetchNewItemAsync } from '../../store/comment/actions';
import Button from '../shared/Button';

function CommentForm(props) {

  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(state => state.USER.currentUser);
  const [loading, setLoading] = useState(false);

  const [content, setContent] = useState('');

  console.log(formData);

  function handleChange(event) {
    setContent(event.target.value);
  }

  function handleSubmit() {
    setLoading(true);
    const data = {
      author,
      content,
      post,
      parent
    }
    dispatch(actFetchNewItemAsync())
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
        <Button onClick={handleSubmit} loading={loading}>Submit</Button> 
      </div>
    </div>
  );
}

export default CommentForm;
