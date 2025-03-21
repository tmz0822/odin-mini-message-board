const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function getMessageById(id) {
  if (isNaN(id) || !Number.isInteger(id)) {
    return;
  }

  try {
    const result = await pool.query('SELECT * FROM messages WHERE id = $1', [
      id,
    ]);
    return result.rows[0];
  } catch (error) {
    console.error(error);
  }
}

async function addMessage(message) {
  const { text, user } = message;
  await pool.query('INSERT INTO messages (text, "user") VALUES ($1, $2)', [
    text,
    user,
  ]);
}

module.exports = { getAllMessages, getMessageById, addMessage };
