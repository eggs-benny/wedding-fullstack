const express = require('express');
const PORT = 5001;
const { sequelize, Guest } = require('./models');

const app = express();
app.use(express.json());

app.post('/guests', async (req, res) => {
  const { firstname, lastname, email, rsvp, meal } = req.body;

  try {
    const guest = Guest.create({ firstname, lastname, email, rsvp, meal });
    return res.json(guest);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

app.listen({ port: PORT }, async () => {
  console.log(`Server up on http:localhost:${PORT}`);
  await sequelize.sync({ force: true });
  console.log('Database synced');
});
