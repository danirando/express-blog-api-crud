const express = require("express");
const router = express.Router();

const { posts } = require("../db");

// INDEX

router.get("", (req, res) => {
  res.json({ posts });
});

// SHOW

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  res.json(post);
});

// STORE

router.post("", (req, res) => {
  res.json("Creo nuovo post");
});

// UPDATE

router.put("/:id", (req, res) => {
  res.json("sostituisco un post");
});

// MODIFY

router.patch("/:id", (req, res) => {
  res.json("modifico un post");
});

// DESTROY

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json("elimino il post " + id);
});

// esporto

module.exports = router;
