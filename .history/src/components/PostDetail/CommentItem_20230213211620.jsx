import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchCommentsChildAsync } from '../../store/comment/actions';
import CommentForm from './CommentForm';

// import CommentForm from './CommentForm';

function CommentItem(props) {
  const dispatch = useDispatch();
  const postId = useSelector((state) => state.POST.articlesDetail.id);
  const { comment } = props;
  const { id, authorName, authorAvatar, contentHTML, date, replyCount } = comment;
  const commentsPaging = useSelector((state) => state.COMMENT.commentsChildData[id] || {});
  const { list: comments, currentPage, totalPage, total } = commentsPaging;
  const [isShow, setisShow] = useState(false);

  let restTotal = total - 3 * currentPage;
  if (isNaN(restTotal)) restTotal = replyCount;
  function handleLoadMore(evt) {
    evt.preventDefault();
    dispatch(actFetchCommentsChildAsync({ page: currentPage ? currentPage + 1 : 1, post: postId, parent: id }));
  }

  function handleShowComment() {
    setisShow(!isShow);
  }

  return (
    <li className="item">
      <div className="comments__section">
        <div className="comments__section--avatar">
          <a href="/">
            <img src={authorAvatar || '/assets/images/avatar1.jpg'} alt="" />
          </a>
        </div>
        <div className="comments__section--content">
          <a href="/" className="comments__section--user">
            {authorName}
          </a>
          <p className="comments__section--time">{date}</p>
          <div className="comments__section--text" dangerouslySetInnerHTML={{ __html: contentHTML }}></div>
          <i className="ion-reply comments__section--reply" onClick={handleShowComment}></i>
        </div>
      </div>
      {/* Reply Comments */}
      {comments && comments.length > 0 && (
        <ul className="comments">
          {comments.map((commentChild) => (
            <CommentItem key={commentChild.id} comment={commentChild} />
          ))}
        </ul>
      )}
      {/* <ul className="comments">
        <li className="item">
          <div className="comments__section">
            <div className="comments__section--avatar">
              <a href="/">
                <img src="/assets/images/avatar3.jpg" alt="" />
              </a>
            </div>
            <div className="comments__section--content">
              <a href="/" className="comments__section--user">
                John Smith
              </a>
              <p className="comments__section--time">2 minutes ago</p>
              <p className="comments__section--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit?</p>
              <i className="ion-reply comments__section--reply"></i>
            </div>
          </div>
        </li>
        <li className="item">
          <div className="comments__section">
            <div className="comments__section--avatar">
              <a href="/">
                <img src="/assets/images/avatar4.jpg" alt="" />
              </a>
            </div>
            <div className="comments__section--content">
              <a href="/" className="comments__section--user">
                John Smith
              </a>
              <p className="comments__section--time">2 minutes ago</p>
              <p className="comments__section--text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt sequi odit exercitationem ma?
              </p>
              <i className="ion-reply comments__section--reply"></i>
            </div>
          </div>
        </li>
      </ul> */}
      {/* Reply form */}
      <CommentForm parentId={0} showForm={isShow}/>
      {restTotal > 0 && (
        <div className="comments__hidden">
          <a href="/" onClick={handleLoadMore}>
            <i className="icons ion-ios-undo" /> Xem thêm {restTotal} câu trả lời
          </a>
        </div>
      )}
    </li>
  );
}

export default CommentItem;
