export default function ArticleItemDesc({desc}) {
  let descRep = desc.replace('<p>', '');
  let descRep = desc.replace('</p>', '');

  
  return (
    <p className="article-item__desc">
      {desc}
    </p>
  );
}
