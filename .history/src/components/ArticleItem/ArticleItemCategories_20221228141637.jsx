// import { Link } from 'react-router-dom';

export default function ArticleItemCategories({categoriesId}) {
  return (
    <ul className="article-item__categories">

      {
        categoriesId.map((categoriyId) => {
          <li key={categoriyId}>
            <a href="/" className="btn btn-category">
              {categoriyId}
            </a>
          </li>
        })
      }


      <li>
        <a href="/" className="btn btn-category">
          News
        </a>
      </li>
    </ul>
  );
}
