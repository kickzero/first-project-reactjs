
import { useDispatch, useSelector } from 'react-redux';
import { actFetchCommentsParentAsync } from '../../store/comment/actions';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import './comments.css';

function PostDetailComments() {
  const dispatch = useDispatch();
  const postId = useSelector((state) => state.POST.articlesDetail.id);
  const commentsPaging = useSelector((state) => state.COMMENT.commentsPaging);
  const { list: comments, currentPage, totalPage, total } = commentsPaging;
  const restTotal = total - 5 * currentPage;
  
  function handleLoadMore(evt) {
    evt.preventDefault();
    dispatch(actFetchCommentsParentAsync({ page: currentPage + 1, post: postId }));
  }

  return (
    <div className="post-detail__comments">
      <CommentForm parentId={0} />
      <p>{total} Comments</p>
      {comments && comments.length > 0 && (
        <ul className="comments">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </ul>
      )}

      {/* Comment 2 */}
      {/* <li className="item">
        <div className="comments__section">
          <div className="comments__section--avatar">
            <a href="/">
              <img src="/assets/images/avatar2.jpg" alt="" />
            </a>
          </div>
          <div className="comments__section--content">
            <a href="/" className="comments__section--user">
              John Smith
            </a>
            <p className="comments__section--time">2 minutes ago</p>
            <p className="comments__section--text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt sequi odit exercitationem maiores?
            </p>
            <i className="ion-reply comments__section--reply"></i>
          </div>
        </div>
        <div className="comments__hidden">
          <a href="/">
            <i className="icons ion-ios-undo" /> Xem thêm 2 câu trả lời
          </a>
        </div>
      </li> */}
      {/* Comment 3 */}
      {/* <li className="item">
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
            <p className="comments__section--text">Lorem ipsum dolor sit, amet?</p>
            <i className="ion-reply comments__section--reply"></i>
          </div>
        </div>
      </li> */}
      {restTotal > 0 && (
        <div className="comments__hidden parent">
          <a href="/" onClick={handleLoadMore}>
            <i className="icons ion-ios-undo" /> Xem thêm {restTotal} câu trả lời
          </a>
        </div>
      )}
    </div>
  );
}

export default PostDetailComments;
