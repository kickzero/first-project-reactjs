export default function ArticleItemDesc({desc}) {
  desc = desc.replace('<p>', '');
  desc = desc.replace('</p>', '');

  let descRep = desc.split('').slice(0, 20).join(' ') + '...';
  return (
    <p className="article-item__desc">
      {desc}
    </p>
  );
}
