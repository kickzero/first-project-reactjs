import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArticleRelated from '../ArticleItem/ArticleRelated';

function PostDetailRelatedPosts() {
  const posts = useSelector(state => state.POST.articlesRelated);
  const dispatch =  useDispatch();

  useEffect(()=>{
    
  }, [])

  return (
    <div className="related-post">
      <h2 className="related-post__head">Related Posts</h2>
      {
        posts.map((post)=>{
          <ArticleRelated key={post.id} post={post}/>
        })
      }
      <ArticleRelated />
      <ArticleRelated />
      <ArticleRelated />
    </div>
  );
}

export default PostDetailRelatedPosts;
