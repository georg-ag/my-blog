import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ArticlesList = ({ articles }) => (
  <>
    {articles.map((article) => (
      <Link className="article-list-item" to={`/article/${article.name}`}>
        <h3>{article.title}</h3>
        <p>{article.content[0].substring(0, 150)}...</p>
      </Link>
    ))}
  </>
);
ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ArticlesList;
