import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ArticleGeneral from '../components/ArticleGeneral';
import ArticleLatest from '../components/ArticleLatest';
import ArticlePopular from '../components/ArticlePopular';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(()=>{
    
  })

  return (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleGeneral />
    </>
  );
}

export default HomePage;
