function PostDetailRichText({content}) {
  return (
    <div className="rte" dangerouslySetInnerHTML={{ __html: contentHTML }}>
      {content}
    </div>
  );
}

export default PostDetailRichText;
