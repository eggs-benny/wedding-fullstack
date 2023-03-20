const { Message, Guest } = require('../models');

const messagesController = {
  getAllMessages: async (req, res) => {
    try {
      const messages = await Message.findAll({ include: 'guest' });

      return res.json(messages);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  },
  createMessage: async (req, res) => {
    const { guestUuid, needsReply, content, reply } = req.body; // ensure all headers included here

    try {
      const guest = await Guest.findOne({ where: { uuid: guestUuid } });

      const message = await Message.create({
        needsReply,
        content,
        reply,
        guestId: guest.id
      });

      return res.json(message);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }
};

module.exports = messagesController;
