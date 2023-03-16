import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CommentForm(props) {

  const currentUser = useSelector(state => state.USER.currentUser);

  if( !currentUser ) return (
    <p>Vui lòng <Link>Đăng nhập</Link> để bình luận</p>
  )

  return (
    <div className="comments__form">
      <div className="comments__form--control">
        <div className="comments__section--avatar">
          <a href="/">
            <img src="/assets/images/avatar1.jpg" alt="" />
          </a>
        </div>
        <textarea />
      </div>
      <div className="text-right">
        <button className="btn btn-default">Submit</button>
      </div>
    </div>
  );
}

export default CommentForm;
