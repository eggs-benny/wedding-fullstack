const express = require('express');
const { sequelize } = require('./models');
let cors = require('cors')

//routes
const guests = require('./routes/api/guests')
const messages = require('./routes/api/messages')

const app = express();

app.use(express.json());

// cors
app.use(cors({ origin: true, credentials: true }));

// use routes
app.use('/guests', guests)
app.use('/messages', messages)

const PORT = 5001; // port number
app.listen({ port: PORT }, async () => {
  console.log(`Server up on http:localhost:${PORT}`);
  await sequelize.authenticate(); // checks db password etc
  console.log('Database connected');
});