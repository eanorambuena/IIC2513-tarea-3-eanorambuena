'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Entry.belongsTo(models.User, {
        foreignKey: 'belongsTo',
        targetKey: 'username'
      });
    }
  }
  Entry.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    date: DataTypes.DATE,
    belongsTo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Entry',
  });
  return Entry;
};