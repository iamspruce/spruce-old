const fetch = require("node-fetch")
const API = "https://webmention.io/api"
const POST_NODE_TYPE = "webmention"
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.sourceNodes = async ({
  actions: {createNode},
  createContentDigest,
  createNodeId,
  cache,
  reporter
}, {
  TOKEN,
  DOMAIN,
  perPage
}) => {
  if (!TOKEN) return reporter.panic("you must provide token");
  const lastFetched = await cache.get(`timestamp`)
  let url = `${API}/mentions.jf2?domain=${DOMAIN}&token=${TOKEN}&per-page=${perPage}?lastUpdated=${lastFetched}`

  const response = await fetch(url);
  const json = await response.json()
  if(!response.ok) {
    throw {
      statusCode: response.status,
      ...json
    }
  }
  const {children: carriers} = json

  const processCarrier = async ({author, ...carrier}) => ({
    ...carrier,
    authorName: author.name,
    authorUrl: author.url,
    authorImg: author.photo,
    authorType: author.type,
    wm_slug: carrier["wm-target"].split("/").pop(),
    id: createNodeId(carrier["wm-id"]),
    internal: {
      type: POST_NODE_TYPE,
      contentDigest: createContentDigest(carrier)
    }
  });

  await Promise.all(
    carriers.map(async (carrier) => createNode(await processCarrier(carrier)))
  );
};

exports.onCreateNode = async ({
  actions: {createNode},
  node,
  store,
  cache,
  createNodeId,
  reporter
}) => {
  if (node.internal.type === POST_NODE_TYPE && node.authorImg) {
    let pictureNode

    try {
      const { id } = await createRemoteFileNode({
        url: node.authorImg,
        parentNodeId: node.id,
        store,
        cache,
        createNode,
        createNodeId
      });

      pictureNode = id;
    } catch (error) {
      reporter.log(`${POST_NODE_TYPE}: no photo at ${node.authorImg}`)
    }

    node.authorImg___NODE = pictureNode
  }
}

exports.onPostBuild = async ({ cache }) => {
  // set a timestamp at the end of the build
  await cache.set(`timestamp`, Date.now())
}


 