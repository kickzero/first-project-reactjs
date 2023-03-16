// import { Link } from 'react-router-dom';

export default function ArticleItemCategories({categoriesId}) {
  return (
    <ul className="article-item__categories">

      {
        categoriesId.map((categoryId) => {
          <li key={categoryId}>
            <a href="/" className="btn btn-category">
              {categoryId}
            </a>
          </li>
        })
      }
    </ul>
  );
}
