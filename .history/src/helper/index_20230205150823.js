export function mappingPostData(post) {
  return {
    id: post.id,
    title: post.title.rendered,
    slug: post.slug,
    contentHTML: post.content.rendered,
    thumb: post.featured_media_url,
    pubDate: post.date,
    authorName: post.author_data.nickname,
    authorAvatar: post.author_data.avatar,
    desc: post.excerpt.rendered,
    categoriesId: post.categories,
    viewCount: post.view_count,
    commentCount: post.comment_count
  }
}

export function mappingMenuData(item) {
  const childItemsData = item?.child_items || [];
  const childItems = childItemsData.map(mappingMenuData);

  return {
    id: item.ID,
    name: item.title,
    link: item.url,
    childItems,
  };
}

export function mappingCommentData(item) {
  return {
    id: item.id,
    date: item.date,
    contentHTML: item.content.rendered,
    replyCount: item.comment_reply_count,
    parent: item.parent,
    authorName: item.author_data.nickname,
    authorAvatar: item.author_data.avatar,
  };
}