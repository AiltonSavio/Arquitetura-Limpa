/* eslint-disable arrow-body-style */
const buildMakePost = ({ Id, validator }) => ({
  id = Id.makeId(),
  title,
  description,
  image,
  tags,
} = {}) => {
  const { error } = validator({
    id, title, description, image, tags,
  });
  if (error) throw new Error(error);

  return Object.freeze({
    getId: () => id,
    getTitle: () => title,
    getDescription: () => description,
    getImage: () => image,
    getTags: () => tags,
  });
};

module.exports = buildMakePost;
