// import { Link } from 'react-router-dom';

import { Link } from "react-router-dom";

export default function ArticleItemTitle({title, slug}) {
  return (
    <h2 className="article-item__title">
      <a href="/only-someone-who's-seen-the-mummy-will-pass-this/">{title}</a>
      <Link to={`post/${slug}`}></Link>
    </h2>
  );
}
