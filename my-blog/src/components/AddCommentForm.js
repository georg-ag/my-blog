import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState('');
  const [commentText, setCommentText] = useState('');

  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: 'POST',
      body: JSON.stringify({ username, text: commentText }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const body = await result.json();
    setArticleInfo(body);
    setUsername('');
    setCommentText('');
  };

  return (
    <div id="add-comment-form">
      <h3>Add a Comment</h3>
      <label htmlFor="name-input">
        Name:
        <input
          id="name-input"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label htmlFor="comment-area">
        Comment
        <textarea
          id="comment-area"
          cols="50"
          rows="4"
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        />
      </label>
      <button type="button" onClick={() => addComment()}>
        Add Comment
      </button>
    </div>
  );
};
AddCommentForm.propTypes = {
  articleName: PropTypes.string.isRequired,
  setArticleInfo: PropTypes.func.isRequired,
};

export default AddCommentForm;
