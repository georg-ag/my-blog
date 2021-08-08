import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import articleContent from './article-content';
import NotFoundPage from './NotFoundPage';
import UpvotesSection from '../components/UpvotesSection';

const ArticlePage = ({ match }) => {
  const { name } = match.params;
  const article = articleContent.find((content) => content.name === name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(async () => {
    const result = await fetch(`/api/articles/${name}`);
    const body = await result.json();
    setArticleInfo(body);
  }, [name]);

  if (!article) {
    return <NotFoundPage />;
  }

  const otherArticles = articleContent.filter((otherArticle) => otherArticle.name !== name);

  return (
    <>
      <h1>{article.title}</h1>
      <UpvotesSection
        articleName={name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      />
      {article.content.map((paragraph, key) => (
        // Article content doesn't change dynamically
        // eslint-disable-next-line react/no-array-index-key
        <p key={key}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};
ArticlePage.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ name: PropTypes.string }) }).isRequired,
};

export default ArticlePage;
