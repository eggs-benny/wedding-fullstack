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
  },
  findGuest: async (req, res) => {
    const uuid = req.params.uuid;
    try {
      const guest = await Guest.findOne({
        where: { uuid },
        include: 'messages'
      });
      return res.json(guest);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Something went wrong' });
    }
  },
  deleteGuest: async (req, res) => {
    const uuid = req.params.uuid;
    try {
      const guest = await Guest.findOne({ where: { uuid } });
      await guest.destroy();
      return res.json({ message: 'Guest deleted!' });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: 'Something went wrong' });
    }
  },
  updateGuest: 
  async (req, res) => {
    const uuid = req.params.uuid;
    const { firstname, lastname, email, rsvp, mealStarter, mealMain } = req.body;
    try {
      const guest = await Guest.findOne({ where: { uuid } });
  
      guest.firstname = firstname;
      guest.lastname = lastname;
      guest.email = email;
      guest.rsvp = rsvp;
      guest.mealStarter = mealStarter;
      guest.mealMain = mealMain;
  
      await guest.save();
  
      return res.json(guest);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: 'Something went wrong' });
    }
  }
};

module.exports = guestsController;
