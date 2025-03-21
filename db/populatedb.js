require('dotenv').config();
const { Client } = require('pg');

// const messages = [
//   {
//     id: 1,
//     text: 'Hi there!',
//     user: 'Amando',
//     added: new Date(),
//   },
//   {
//     id: 2,
//     text: 'Hello World!',
//     user: 'Charles',
//     added: new Date(),
//   },
// ];

const SQL = `
DROP TABLE messages;

CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR(255),
  "user" VARCHAR(255),
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, "user")
VALUES 
  ('Hi there!', 'Amando'),
  ('Hello World!', 'Charles');
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: process.env.DATABASE_CONNECTION_STRING,
  });
  await client.connect();

  try {
    await client.query(SQL);
  } catch (error) {
    console.error(error);
  } finally {
    await client.end();
  }

  console.log('done');
}

main();
