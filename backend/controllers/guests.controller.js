const { Guest } = require('../models');

const guestsController = {
  login: async (req, res) => {
    // TODO: implement login functionality
  },
  getAllGuests: async (req, res) => {
    try {
      const guests = await Guest.findAll();
      return res.status(200).json(guests);
    } catch (error) {
      console.error(error);
      return res.status(error.status).json({ error: error.message });
    }
  },
  createGuest: async (req, res) => {
    const { firstname, lastname, email, rsvp, mealStarter, mealMain } =
      req.body; // ensure all headers included here
    try {
      const guest = await Guest.create({
        firstname,
        lastname,
        email,
        rsvp,
        mealStarter,
        mealMain
      });
      return res.status(201).json(guest); // (restaurant => res.json({ msg: 'Restaurant added successfully', restaurant_created: restaurant}))
    } catch (error) {
      console.error(error);
      return res.status(error.status).json({ error: error.message });
    }
  },
  findGuest: async (req, res) => {
    const uuid = req.params.uuid;
    try {
      const guest = await Guest.findOne({
        where: { uuid },
        include: 'messages'
      });
      if (!guest) {
        throw createError(404, 'Guest not found, please recheck the UUID');
      }
      return res.status(200).json(guest);
    } catch (error) {
      console.error(error);
      return res.status(error.status).json({ error: error.message });
    }
  },
  deleteGuest: async (req, res) => {
    const uuid = req.params.uuid;
    try {
      const guest = await Guest.findOne({ where: { uuid } });
      if (!guest) {
        throw createError(404, 'Guest not found, please recheck the UUID');
      }
      await guest.destroy();
      return res.status(204).json({ message: 'Guest deleted!' });
    } catch (error) {
      console.error(error);
      return res.status(error.status).json({ error: error.message });
    }
  },
  updateGuest: async (req, res) => {
    const uuid = req.params.uuid;
    const { firstname, lastname, email, rsvp, mealStarter, mealMain } =
      req.body;
    try {
      const guest = await Guest.findOne({ where: { uuid } });

      guest.firstname = firstname;
      guest.lastname = lastname;
      guest.email = email;
      guest.rsvp = rsvp;
      guest.mealStarter = mealStarter;
      guest.mealMain = mealMain;

      await guest.save();
      if (!guest) {
        throw createError(404, 'Guest not found, please recheck the UUID');
      }
      res.status(200).json(guest);
    } catch (error) {
      console.error(error);
      return res.status(error.status).json({ error: error.message });
    }
  }
};

module.exports = guestsController;
