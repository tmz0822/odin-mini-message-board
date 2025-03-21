const express = require('express');
const app = express();
const path = require('node:path');

const messagesRouter = require('./routes/messagesRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use('/', messagesRouter);

// Simple error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
