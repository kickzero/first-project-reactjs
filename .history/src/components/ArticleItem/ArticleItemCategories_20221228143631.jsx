// import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";

export default function ArticleItemCategories({categoriesId}) {
  const categories = useSelector(state => state.CATEGORY.listCategory);
  console.log(categories)
  return (
    <ul className="article-item__categories">
      {
        categoriesId.map((categoryId) => (
          <li key={categoryId}>
            <a href="/" className="btn btn-category">
              {categoryId}
            </a>
          </li>
        ))
      }
    </ul>
  );
}
