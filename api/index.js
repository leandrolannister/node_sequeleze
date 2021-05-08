const express = require('express');
const routes = require('./routes');

const port = 3000;
const app = express();
routes(app);

app.get('/teste', (req, res) => res
  .status(200)
  .send({mensagem: 'welcome'})
);

app.listen(port, () => console.log(`Server is running at ${port}`));

module.exports = app;