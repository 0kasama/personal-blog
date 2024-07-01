'use strict';
const slugify = require("slugify")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      "posts",
      [
        {
          userId: 1,
          slug: slugify("Test Blog"),
          title: "Test Blog",
          content: "<p><b>Lorem ipsum dolor sit amet,</b> consectetur adipiscing elit. Mauris iaculis, purus sit amet ultrices facilisis, purus urna fringilla ex, id venenatis augue elit eu dui. Maecenas et est quis eros faucibus consequat eget nec erat. Pellentesque sed auctor mi. Mauris rhoncus eu velit eget rutrum. Sed congue vulputate erat at ullamcorper. Aenean consequat gravida odio nec maximus. Mauris id fringilla ipsum. Duis egestas euismod elit, vel commodo magna sollicitudin id. Suspendisse ultrices facilisis finibus. Integer vel bibendum felis, vel pharetra tellus. <u>Pellentesque iaculis faucibus sodales.</u></p><p><i>Morbi consequat mattis bibendum.</i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nam luctus lacus non risus porttitor, et mattis mauris lobortis. Maecenas ultrices tempor risus, pulvinar viverra enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ut iaculis libero, non aliquam libero. Etiam eu bibendum turpis. Aenean finibus at quam eu consectetur. Praesent eget vehicula mauris, eget ultricies purus. Curabitur in augue ac turpis vulputate efficitur. Etiam et leo massa. Curabitur a tincidunt mauris. Vestibulum mi diam, viverra id dapibus at, placerat vel metus. Suspendisse vel tortor vel urna pharetra faucibus vitae vitae nibh.</p>",
          tag: "Blog",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          slug: slugify("Test Post"),
          title: "Test Post",
          content: "<p><b>Lorem ipsum dolor sit amet,</b> consectetur adipiscing elit. Mauris iaculis, purus sit amet ultrices facilisis, purus urna fringilla ex, id venenatis augue elit eu dui. Maecenas et est quis eros faucibus consequat eget nec erat. Pellentesque sed auctor mi. Mauris rhoncus eu velit eget rutrum. Sed congue vulputate erat at ullamcorper. Aenean consequat gravida odio nec maximus. Mauris id fringilla ipsum. Duis egestas euismod elit, vel commodo magna sollicitudin id. Suspendisse ultrices facilisis finibus. Integer vel bibendum felis, vel pharetra tellus. <u>Pellentesque iaculis faucibus sodales.</u></p><p><i>Morbi consequat mattis bibendum.</i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nam luctus lacus non risus porttitor, et mattis mauris lobortis. Maecenas ultrices tempor risus, pulvinar viverra enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ut iaculis libero, non aliquam libero. Etiam eu bibendum turpis. Aenean finibus at quam eu consectetur. Praesent eget vehicula mauris, eget ultricies purus. Curabitur in augue ac turpis vulputate efficitur. Etiam et leo massa. Curabitur a tincidunt mauris. Vestibulum mi diam, viverra id dapibus at, placerat vel metus. Suspendisse vel tortor vel urna pharetra faucibus vitae vitae nibh.</p>",
          tag: "Post",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("posts", null, {});
  }
};
