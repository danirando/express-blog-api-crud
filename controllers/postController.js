const { log } = require("console");
const { posts } = require("../db");

// INDEX

const index = (req, res) => {
  const filterTag = req.query.tags;
  let filteredPost = posts;

  if (filterTag) {
    filteredPost = filteredPost.filter((post) => post.tags.includes(filterTag));
    return res.json(filteredPost);
  }

  res.json(posts);
};

// SHOW

const show = (req, res) => {
  const postId = parseInt(req.params.id);

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return res
      .status(404)
      .json({ error: "404 not found", message: "Post non trovato" });
  }

  res.json({ data: post, status: 200 });
};

// STORE

const store = (req, res) => {
  const { title, content, image, tags } = req.body;

  let maxId = 0;
  for (const post of posts) {
    if (post.id > maxId) maxId = post.id;
  }
  const postId = maxId + 1;

  const newPost = { id: postId, title, content, image, tags };

  let isRequestMalformed = false;

  if (!title || typeof title !== "string" || title.length < 3)
    isRequestMalformed = true;

  if (typeof content !== "string") isRequestMalformed = true;

  if (typeof image !== "string") isRequestMalformed = true;

  if (!Array.isArray(tags)) isRequestMalformed = true;

  if (isRequestMalformed) {
    res.status(404).json({
      error: "400 bad request",
      message: "Request is malformed",
    });
    return;
  }

  posts.push(newPost);

  res.status(201).json(newPost);
};

// UPDATE

const update = (req, res) => {
  res.json("sostituisco un post");
};

//  MODIFY

const modify = (req, res) => {
  res.json("modifico un post");
};

// DESTROY

const destroy = (req, res) => {
  const postId = parseInt(req.params.id);

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return res
      .status(404)
      .json({ error: "404 not found", message: "Post non trovato" });
  }

  posts.splice(posts.indexOf(post), 1);

  res.sendStatus(204);
};

module.exports = { index, show, store, update, modify, destroy };
