const { posts } = require("../models");
const slugify = require("slugify");

const findAll = async () => {
  const post = await posts.findAll();

  return post;
};

const findOne = async (params) => {
  const isNumeric = (string) => /^[+-]?\d+(\.\d+)?$/.test(string);
  const filterOption = {};
  if (isNumeric(params.id) === false) {
    filterOption.where = { slug: params.id };
  } else {
    filterOption.where = { id: +params.id };
  }

  const post = await posts.findOne(filterOption);

  return post;
};

const create = async ({ userId, params }) => {
  const post = await posts.create({
    userId: userId,
    title: params.title,
    content: params.content,
    tag: params.tag,
    slug: slugify(params.title),
  });

  return post;
};

const update = async (params) => {
  const isNumeric = (string) => /^[+-]?\d+(\.\d+)?$/.test(string);
  const filterOption = {};
  if (isNumeric(params.id)) {
    filterOption.where = { id: +params.id };
  } else {
    filterOption.where = { slug: params.id };
  }

  const post = await posts.findOne(filterOption);

  if (!post) {
    throw {
      name: "ErrorNotFound",
    };
  }

  if (params.data.title) {
    params.data.slug = slugify(params.data.title);
  }

  await post.update(params.data);

  return post;
};

const destroy = async (params) => {
  const { id, userId } = params;

  const post = await posts.findOne({
    where: {
      id: +id,
      userId: userId,
    },
  });

  if (!post) {
    throw {
      name: "ErrorNotFound",
    };
  }

  await post.destroy();

  return post;
};

module.exports = { findAll, findOne, create, update, destroy };
