// import { Link } from 'react-router-dom';

export default function ArticleItemCategories([categoriesId]) {
  return (
    <ul className="article-item__categories">
      <li>
        {
          categoriesId.map((categoriesId) => {
            <a href="/" className="btn btn-category">
              {categoriesId}
            </a>
          })
        }

      </li>
      <li>
        <a href="/" className="btn btn-category">
          News
        </a>
      </li>
    </ul>
  );
}
