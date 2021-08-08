import React from 'react';
import PropTypes from 'prop-types';

const CommentsList = ({ comments }) => (
  <>
    <h3>Comments</h3>
    {comments.map((comment, key) => (
      // Aarray is always fetched entirely
      // eslint-disable-next-line react/no-array-index-key
      <div key={key} className="comment">
        <h4>{comment.username}</h4>
        <p>{comment.text}</p>
      </div>
    ))}
  </>
);
CommentsList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ username: PropTypes.string, text: PropTypes.string }),
  ).isRequired,
};

export default CommentsList;
