const express = require('express');
const parser = require('./directory/bodyParser')
const routes = require('./directory/routes');

const app = express();
const PORT = 3000;

parser(app)
routes(app)

app.listen(PORT, () => {
    console.log(`example app listening at http://localhost:${PORT}`)
});
