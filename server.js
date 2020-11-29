const express = require('express');
const app = express();
const swig = require('swig');
const config = require('./config');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

swig.setDefaults(config.swig);
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json());

// routes config

const indexRoute = require('./routes/');
const petRoute = require('./routes/pet');

app.use('/', indexRoute);
app.use('/api/pet', petRoute);

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.listen(config.port, () => {
  console.log(`Pet Server is listening on port ${config.port}`);
});
