const makePostPost = ({ addPost }) => async (httpRequest) => {
  try {
    const { source = {}, ...commentInfo } = httpRequest.body;
    source.ip = httpRequest.ip;
    source.browser = httpRequest.headers['User-Agent'];
    if (httpRequest.headers.Referer) {
      source.referrer = httpRequest.headers.Referer;
    }
    const posted = await addPost({
      ...commentInfo,
    });
    return {
      headers: {
        'Content-Type': 'application/json',
        'Last-Modified': new Date(posted.modifiedOn).toUTCString(),
      },
      statusCode: 201,
      body: { posted },
    };
  } catch (e) {
    return {
      headers: {
        'Content-Type': 'application/json',
      },
      statusCode: 400,
      body: {
        error: e.message,
      },
    };
  }
};

module.exports = makePostPost;
