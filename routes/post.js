const express = require("express");
const router = express.Router();
const {
  create,
  list,
  readPost,
  updatePost,
  deletePost,
} = require("../controllers/post");
const { requireSignIn } = require("../controllers/auth");
// we can move the 2nd argument (arrow function to other folder and we call it controllers)
//post endpoint(route)
router.post("/post", requireSignIn, create);
router.get("/posts", list);
router.get("/post/:slug", readPost);
router.put("/post/:slug", requireSignIn, updatePost);
router.delete("/post/:slug", requireSignIn, deletePost);

// router.get("/secret", requireSignIn, (req, res) => {
//   res.json({
//     data: req.user.name,
//   });
// });
module.exports = router;
