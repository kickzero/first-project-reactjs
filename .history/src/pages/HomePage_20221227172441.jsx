import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ArticleGeneral from '../components/ArticleGeneral';
import ArticleLatest from '../components/ArticleLatest';
import ArticlePopular from '../components/ArticlePopular';
import { actFetchArticleLatestAsync } from '../store/post/action';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actFetchArticleLatestAsync());
    dispatch(actFetchArticleLatestAsync());
    dispatch(actFetchArticleLatestAsync());
  }, [dispatch])

  return (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleGeneral />
    </>
  );
}

export default HomePage;
