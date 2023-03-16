export default function ArticleItemDesc({descRep}) {
  let descRep = desc.replace('<p>', '');
  let descRep = desc.replace('</p>', '');

  let descRep = desc.split('').slice(0, 20).join(' ') + '...';
  return (
    <p className="article-item__desc">
      {descRep}
    </p>
  );
}
