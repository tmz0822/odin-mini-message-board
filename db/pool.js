require('dotenv').config();

const { Pool } = require('pg');
// DATABASE_URL is for Railway
module.exports = new Pool({
  connectionString:
    process.env.DATABASE_URL || process.env.DATABASE_CONNECTION_STRING,
});
