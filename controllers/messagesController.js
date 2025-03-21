const db = require('../db/queries');

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render('index', { title: 'Mini Messageboard', messages: messages });
}

function renderMessageForm(req, res) {
  res.render('form');
}

async function getMessageById(req, res) {
  const messageId = Number(req.params.id);

  if (isNaN(messageId) || !Number.isInteger(messageId)) {
    return;
  }

  const message = await db.getMessageById(messageId);

  res.render('messages/details', { message: message });
}

async function addMessage(req, res) {
  const { author, message } = req.body;

  await db.addMessage({ text: message, user: author });

  res.redirect('/');
}

module.exports = {
  getMessages,
  renderMessageForm,
  getMessageById,
  addMessage,
};
