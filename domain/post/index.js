const buildMakePost = require('./post');
const Id = require('../../infrastructure/post/Id');
const validator = require('../../infrastructure/post/validator');

const makePost = buildMakePost({ Id, validator });

module.exports = makePost;
