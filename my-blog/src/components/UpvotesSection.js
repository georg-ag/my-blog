import React from 'react';
import PropTypes from 'prop-types';

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
  const upvoteArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, { method: 'POST' });
    const body = await result.json();
    setArticleInfo(body);
  };
  return (
    <div id="upvotes-section">
      <button type="button" onClick={() => upvoteArticle()}>
        Add Upvote
      </button>
      <p>This post has been upvoted {upvotes} times</p>
    </div>
  );
};
UpvotesSection.propTypes = {
  articleName: PropTypes.string.isRequired,
  upvotes: PropTypes.number.isRequired,
  setArticleInfo: PropTypes.func.isRequired,
};

export default UpvotesSection;
