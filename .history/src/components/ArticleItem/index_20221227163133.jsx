import './article-item.css';
import cls from 'classnames';
import ArticleItemDesc from './ArticleItemDesc';
import ArticleItemThumb from './ArticleItemThumb';
import ArticleItemTitle from './ArticleItemTitle';
import ArticleItemInfo from './ArticleItemInfo';
import ArticleItemCategories from './ArticleItemCategories';
import ArticleItemStats from './ArticleItemStats';

export default function ArticleItem({
  isStyleRow = false,
  isStyleCard = false,
  isShowDesc = false,
  isShowCategoies = false,
  isShowAvatar = true,
  post,
}) {
  
  if(!post) return <></>;
  console.log('post', post);
  const { id, title, thumb, pubDate, authorName, authorAvatar} = post;

  const classes = cls('article-item', {
    'style-card': isStyleCard,
    'style-row': isStyleRow,
  });

  return (
    <article className={classes}>
      <ArticleItemThumb thumb={thumb}/>
      <div className="article-item__content">
        {isShowCategoies && <ArticleItemCategories />}
        {isShowCategoies && <ArticleItemStats />}

        <ArticleItemTitle title={title}/>

        {isShowDesc && <ArticleItemDesc />}

        <ArticleItemInfo isShowAvatar={isShowAvatar} />
      </div>
    </article>
  );
}
