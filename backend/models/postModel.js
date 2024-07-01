'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class postModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      postModel.belongsTo(models.users, {
        foreignKey: "userId",
      })
    }
  }
  postModel.init({
    userId: DataTypes.INTEGER,
    slug: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    tag: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'posts',
    timestamps: true
  });
  return postModel;
};