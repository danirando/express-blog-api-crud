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
  res.json("Creo nuovo post");
};

// UPDATE

const update = (req, res) => {
  res.json("sostituisco un post");
};

//  MODIFY

const modify = (req, res) => {
  res.json("modifico un post");
};

module.exports = { index, show, store, update, modify };
