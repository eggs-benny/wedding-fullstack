const { Guest } = require('../models');

// add a guest

const guestsController = {
  getAllGuests: async (req, res) => {
    try {
      const guests = await Guest.findAll();
      return res.status(200).json(guests);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Something went wrong' });
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
      return res.json(guest); // (restaurant => res.json({ msg: 'Restaurant added successfully', restaurant_created: restaurant}))
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }
};

module.exports = guestsController;
