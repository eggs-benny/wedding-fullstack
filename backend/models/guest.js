'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Guest.init(
    {
      firstname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      rsvp: {
        type: DataTypes.BOOLEAN
      },
      meal: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      tableName: 'guests',
      modelName: 'Guest'
    }
  );
  return Guest;
};
