const express = require('express');
const { Sequelize } = require('sequelize');
const cors = require('cors');

const app = express();

app.use(express.json());

// cors
app.use(cors({ origin: true, credentials: true }));

// create the database schema automatically
const sequelize = new Sequelize('wedding_dev', 'benedictsmith', 'root', {
  host: 'localhost',
  dialect: 'postgres',
});

async function createDatabaseSchema() {
  await sequelize.sync();
  console.log('Database schema has been created.');
}

createDatabaseSchema();


// routes
const guests = require('./routes/api/guests');
const messages = require('./routes/api/messages');

// wrap app.listen in a function that waits for sequelize to sync
const startServer = async () => {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server up on http://[IP ADDRESS]:${PORT}`);
  });
};

startServer();
