const bodyParser = require('body-parser');
const pessoas = require('./pessoasRouter');
const niveis = require('./niveisRoute');
const turmas = require('./turmasRoute');

module.exports = app => {
  app.use(bodyParser.json());
  app.use(pessoas);
  app.use(niveis);
  app.use(turmas);
  //app.get('/', (req, res) => res.send('Welcome to index'));
}

