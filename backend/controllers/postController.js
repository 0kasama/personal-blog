const postService = require("../services/postService");

const findAll = async (req, res, next) => {
  try {
    const posts = await postService.findAll();

    res.status(200).json({ message: "Get all posts", posts });
  } catch (err) {
    console.error(err)
    next(err);
  }
};

const findOne = async (req, res, next) => {
  try {
    const params = {
      id: req.params.id,
    };
    const post = await postService.findOne(params);

    res.status(200).json({ message: "Get post by id", post });
  } catch (err) {
    console.error(err)
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const params = {
      userId: req.loggedUser.id,
      params: req.body,
    };
    const post = await postService.create(params);

    res.status(201).json({ message: "Successfully create", post });
  } catch (err) {
    console.error(err)
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const params = {
      id: req.params.id,
      data: req.body,
    };
    const post = await postService.update(params);

    res.status(201).json({ message: "Update success", post });
  } catch (err) {
    console.error(err)
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const params = {
      userId: req.loggedUser.id,
      id: req.params.id,
    };

    const post = await postService.destroy(params);

    res.status(200).json({ message: "post deleted", post });
  } catch (err) {
    console.error(err)
    next(err);
  }
};

module.exports = { findAll, findOne, create, update, destroy };
