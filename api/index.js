const express = require('express');
const bodyParse = require('body-parser');
const port = 3000;

const app = express();

app.use(bodyParse.json());

app.get('/teste', (req, res) => res
  .status(200)
  .send({mensagem: 'welcome'})
);

app.listen(port, () => console.log(`Server is running at ${port}`));

module.exports = app;