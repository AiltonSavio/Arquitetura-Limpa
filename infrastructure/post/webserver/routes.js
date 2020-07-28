const express = require('express');

const { postPost } = require('../../../interfaces/post/controllers');
const makeCallback = require('../../../interfaces/post/express-callback');

const router = express.Router();

router
  .post('/posts', makeCallback(postPost));
// .get('/posts/:id', makeCallback(getPost))
// .delete('/posts/:id', makeCallback(deletePost));

module.exports = router;
