const Post = require("../models/post");

const slugify = require("slugify");

exports.create = (req, res) => {
  const { title, content, user } = req.body;
  const slug = slugify(title);
  //   res.json({
  //     message: "See your Console Server",
  //   });
  //console.log(req.body);
  //   res.json({
  //     data: "You reached Node Js API for react node crud ",
  //   });

  // create Post

  Post.create({ title, content, user, slug }, (err, post) => {
    if (err) {
      console.log(err);
      res.status(400).json({ error: "Duplicate post, Try another title" });
    }
    res.json(post);
  });
};

///Read Post

exports.list = (req, res) => {
  Post.find({})
    .limit(10)
    .sort({ createdAt: -1 })
    .exec((err, posts) => {
      if (err) {
        console.log(err);
      }
      res.json(posts);
    });
};
exports.readPost = (req, res) => {
  const { slug } = req.params;
  console.log(slug);
  Post.findOne({ slug }).exec((err, post) => {
    if (err) {
      console.log(err);
    }
    res.json(post);
  });
};
exports.updatePost = (req, res) => {
  const { slug } = req.params;
  const { title, content, user } = req.body;
  Post.findOneAndUpdate({ slug }, { title, content, user }, { new: true }).exec(
    (err, post) => {
      if (err) console.log(err);
      res.json(post);
    }
  );
};
exports.deletePost = (req, res) => {
  const { slug } = req.params;
  console.log(slug);
  Post.findOneAndRemove({ slug }).exec((err, post) => {
    if (err) {
      console.log(err);
    }
    res.json({ message: "Post Deleted" });
  });
};
