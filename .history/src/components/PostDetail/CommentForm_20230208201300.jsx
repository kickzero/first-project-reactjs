import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Button from '../shared/Button';

function CommentForm(props) {

  const currentUser = useSelector(state => state.USER.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

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
        <textarea />
      </div>
      <div className="text-right">
        <Button>Submit</Button>
      </div>
    </div>
  );
}

export default CommentForm;
