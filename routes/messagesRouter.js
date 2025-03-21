const { Router } = require('express');

const messagesRouter = Router();

const messagesController = require('../controllers/messagesController');

messagesRouter.get('/', messagesController.getMessages);

messagesRouter.get('/new', messagesController.renderMessageForm);

messagesRouter.get('/:id', messagesController.getMessageById);

messagesRouter.post('/new', messagesController.addMessage);

module.exports = messagesRouter;
