const express = require('express'); // server
const PORT = 5001; // port number
const { sequelize, Guest, Message } = require('./models');

const app = express();
app.use(express.json());

// add a guest
app.post('/guests', async (req, res) => {
  const { firstname, lastname, email, rsvp, mealStarter, mealMain } = req.body; // ensure all headers included here

  try {
    const guest = await Guest.create({
      firstname,
      lastname,
      email,
      rsvp,
      mealStarter,
      mealMain
    });
    return res.json(guest);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

// get all guests
app.get('/guests', async (req, res) => {
  try {
    const guests = await Guest.findAll();
    return res.json(guests);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});

// find a guest
app.get('/guests/:uuid', async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const guest = await Guest.findOne({
      where: { uuid },
      include: 'messages'
    });
    return res.json(guest);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: 'Something went wrong' });
  }
});

// delete a guest
app.delete('/guests/:uuid', async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const guest = await Guest.findOne({ where: { uuid } });
    await guest.destroy();
    return res.json({ message: 'Guest deleted!' });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: 'Something went wrong' });
  }
});

// update a guest
app.put('/guests/:uuid', async (req, res) => {
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
});

// add a message
app.post('/messages', async (req, res) => {
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
});

// get all messages
app.get('/messages', async (req, res) => {
  try {
    const messages = await Message.findAll({ include: 'guest' });

    return res.json(messages);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

app.listen({ port: PORT }, async () => {
  console.log(`Server up on http:localhost:${PORT}`);
  await sequelize.authenticate(); // checks db password etc
  console.log('Database connected');
});
