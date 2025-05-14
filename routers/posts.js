const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");

// INDEX

router.get("", postController.index);

// SHOW

router.get("/:id", postController.show);

// STORE

router.post("", postController.store);

// UPDATE

router.put("/:id", postController.update);

// MODIFY

router.patch("/:id", postController.modify);

// DESTROY

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json("elimino il post " + id);
});

// esporto

module.exports = router;
