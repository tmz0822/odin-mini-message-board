require('dotenv').config();
const { Client } = require('pg');

const SQL = `
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
    connectionString:
      process.env.DATABASE_URL || process.env.DATABASE_CONNECTION_STRING,
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
