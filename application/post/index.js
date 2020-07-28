const makeAddPost = require('./add-post');
const postsDb = require('../../interfaces/post/data-access');

const addPost = makeAddPost({ postsDb });

const postService = Object.freeze({
  addPost,
  // editPost,
  // listPosts,
  // etc...
});

module.exports = postService;
