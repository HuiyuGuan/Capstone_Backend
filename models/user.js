'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    userName: DataTypes.STRING,
    userPswd: DataTypes.STRING,
    email: { 
      type: DataTypes.STRING,
      unique:true,
      allowNull:false,
      validate:{
        isEmail:true,
      }
    },
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};