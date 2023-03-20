'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Message }) {
      // define association here
      this.hasMany(Message, {foreignKey: 'guestId'})
    }

    toJSON(){
      return { ...this.get(), id: undefined} // this hides the id from db view
    }
  }
  Guest.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // this adds scrambled id rather than 1,2,3,4 etc
      },
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
      tableName: 'guests', // ensures table name is lower case
      modelName: 'Guest'
    }
  );
  return Guest;
};
