'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Guest }) {
      // define association here
      // guestID
      this.belongsTo(Guest, { foreignKey: 'guestId', as: 'guest'});
    }

    toJSON() {
      return { ...this.get(), id: undefined, guestId: undefined }; // this hides the id & guest id from db view
    }
  }
  Message.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      needsReply: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Message must have content' },
          notEmpty: { msg: 'Content cannot be empty' }
        }
      },
      reply: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: 'Reply cannot be empty' }
        }
      },
      guestId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    {
      sequelize,
      tableName: 'messages',
      modelName: 'Message'
    }
  );
  return Message;
};
