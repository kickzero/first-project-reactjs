import './post-author.css';

function PostDetailAuthor({post}) {
  const { authorName } = post;

  return (
    <div className="post-author">
      <div className="post-author__bg-avatar">
        <a href="/" className="post-author__avatar">
          <img src="/assets/images/blog-detail.jpg" alt="" />
        </a>
      </div>
      <div className="post-author__nickname">
        <a href="/">{authorName}</a>
      </div>
      <p className="post-author__desc">
        Lorem ipsum, dolor sit amet conse ctetur adipi sicing elit. Necessitatibus, vel vero vel vero vel vero vel vero!
      </p>
    </div>
  );
}

export default PostDetailAuthor;
