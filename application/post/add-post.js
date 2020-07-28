const makePost = require('../../domain/post');

const makeAddPost = ({ postsDb }) => (postInfo) => {
  const post = makePost(postInfo);

  return postsDb.insert({
    id: post.getId(),
    title: post.getTitle(),
    description: post.getDescription(),
    image: post.getImage(),
    tags: post.getTags(),
  });
};

module.exports = makeAddPost;
