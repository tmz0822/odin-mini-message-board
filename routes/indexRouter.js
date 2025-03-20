const { Router } = require('express');

const indexRouter = Router();

const messages = [
  {
    id: 1,
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    id: 2,
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

indexRouter.get('/new', (req, res) => {
  res.render('form');
});

indexRouter.get('/:id', (req, res) => {
  const messageId = req.params.id;

  const message = messages.find((message) => message.id === Number(messageId));

  res.render('messages/details', { message: message });
});

indexRouter.post('/new', (req, res) => {
  const { author, message } = req.body;
  messages.push({
    id: messages.length,
    text: message,
    user: author,
    added: new Date(),
  });

  res.redirect('/');
});

module.exports = indexRouter;
