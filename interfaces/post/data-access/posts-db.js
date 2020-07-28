const Id = require('../../../infrastructure/post/Id');

const makePostsDb = ({ makeDb }) => {
  async function insert({ id: _id = Id.makeId(), ...commentInfo }) {
    const db = await makeDb();

    const result = await db
      .collection('posts')
      .insertOne({ _id, ...commentInfo });
    const { _id: id, ...insertedInfo } = result.ops[0];
    return { id, ...insertedInfo };
  }

  return Object.freeze({
    insert,
    // remove,
    // update,
    // etc...
  });
};

module.exports = makePostsDb;
