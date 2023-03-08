const express = require('express'); // server
const PORT = 5001; // port number
const { sequelize, Guest } = require('./models');

const app = express();
app.use(express.json());

// add a guest
app.post('/guests', async (req, res) => {
  const { firstname, lastname, email, rsvp, meal } = req.body; // ensure all headers included here

  try {
    const guest = await Guest.create({ firstname, lastname, email, rsvp, meal });
    return res.json(guest);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

// get all guests
app.get('/guests', async (req, res) => {
  try {
    const guests = await Guest.findAll()
    return res.json(guests)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Something went wrong"})
  }
})

// get one guest
app.get('/guests/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  try {
    const guests = await Guest.findOne({
      where: {uuid}
    })
    return res.json(guests)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Something went wrong"})
  }
})

app.listen({ port: PORT }, async () => {
  console.log(`Server up on http:localhost:${PORT}`);
  await sequelize.authenticate() // checks db password etc
  console.log('Database connected');
});
