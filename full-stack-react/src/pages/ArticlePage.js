import React from 'react';
import PropTypes from 'prop-types';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
  const { name } = match.params;
  const article = articleContent.find((content) => content.name === name);

  if (!article) {
    return <NotFoundPage />;
  }

  const otherArticles = articleContent.filter((otherArticle) => otherArticle.name !== name);

  return (
    <>
      <h1>
        <article>{article.title}</article>
      </h1>
      {article.content.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};
ArticlePage.propTypes = {
  match: PropTypes.shape({ params: PropTypes.string }).isRequired,
};

export default ArticlePage;
