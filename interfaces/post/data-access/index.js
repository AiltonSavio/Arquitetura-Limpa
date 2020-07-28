const makePostsDb = require('./posts-db');
const makeDb = require('../../../infrastructure/post/db');

const postsDb = makePostsDb({ makeDb });

module.exports = postsDb;
