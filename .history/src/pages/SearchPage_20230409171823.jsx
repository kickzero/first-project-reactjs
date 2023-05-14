import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ArticleItem from '../components/ArticleItem';
import MainTitle from '../components/shared/MainTitle';
import { usePostPaging } from '../hooks/usePostPaging';
import { actFetchArticlePagingAsync } from '../store/post/action';


function SearchPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(location.search);
  const keyword = urlParams.get('keyword');
  const params = { extrasParam: { per_page: 1, search: keyword } };
  const { total, posts, showButtonLoadMore } = usePostPaging(params);

  useEffect(() => {
    dispatch(actFetchArticlePagingAsync(1, params.extrasParam));
  }, [keyword, dispatch]);

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">
          {total} kết quả tìm kiếm với từ khóa "{keyword}"
        </MainTitle>

        <div className="tcl-row tcl-jc-center">
          {posts.map((post) => (
            <div className="tcl-col-12 tcl-col-md-8" key={post.id}>
              <ArticleItem isStyleCard isShowCategoies isShowAvatar={false} isShowDesc={false} post={post} />
            </div>
          ))}
        </div>
        {showButtonLoadMore()}
      </div>
    </div>
  );
}

export default SearchPage;
