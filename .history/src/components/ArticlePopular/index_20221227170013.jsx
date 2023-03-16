import { useSelector } from 'react-redux';
import ArticleItem from '../ArticleItem';
import './popular-news-list.css';

function ArticlePopular() {
  const posts = useSelector(state => state.POST.articlesLatest);

  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        {/* Main Title */}
        <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
          <h2>Popular Articles</h2>
          <a href="/" className="btn btn-default">
            View More
          </a>
        </div>
        {/* End Main Title */}
        <div className="popular-news__list spacing">
          <div className="popular-news__list--left">
            <div className="popular-news__list--row">
              {/* Popular news card */}
              {
                <div key={post.id} className="latest-news__card">
                  <ArticleItem post={posts[0]} />
                </div>

              }
              {/* End Popular news card */}
              {/* Popular news card */}
              {
                posts.map((post) => (
                  <div key={post.id} className="latest-news__card">
                    <ArticleItem post={post} />
                  </div>
                ))
              }
              {/* End Popular news card */}
            </div>
          </div>
          <div className="popular-news__list--right">
            <div className="popular-news__list--row">
              {/* Popular news card */}
              {
                posts.map((post) => (
                  <div key={post.id} className="latest-news__card">
                    <ArticleItem post={post} />
                  </div>
                ))
              }
              {/* End Popular news card */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePopular;
