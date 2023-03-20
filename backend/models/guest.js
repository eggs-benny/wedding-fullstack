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
      this.hasMany(Message, { foreignKey: 'guestId', as: 'messages' });
    }

    toJSON() {
      return { ...this.get(), id: undefined }; // this hides the id from db view
    }
  }
  Guest.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4 // this adds scrambled id rather than 1,2,3,4 etc
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Guest must have a first name' },
          notEmpty: { msg: 'First name must not be empty' }
        }
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Guest must have a last name' },
          notEmpty: { msg: 'Last name must not be empty' }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Guest must have an email' },
          isEmail: { msg: 'Must be a valid email address'}
        }
      },
      rsvp: {
        type: DataTypes.BOOLEAN
      },
      mealStarter: {
        type: DataTypes.STRING,
        validate: {
          isIn: {
            args: [['fish', 'veggie']],
            msg: 'Options are either `fish` or `veggie`'
          }
        }
      },
      mealMain: {
        type: DataTypes.STRING,
        validate: {
          isIn: {
            args: [['beef', 'veggie']],
            msg: 'Options are either `beef` or `veggie`'
          }
        }
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
