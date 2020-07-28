const { addPost } = require('../../../application/post');
const makePostPost = require('./post-post');

const postPost = makePostPost({ addPost });

const postController = Object.freeze({
  postPost,
  // getPost,
  // putPost,
  // etc...
});

module.exports = postController;
