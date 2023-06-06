const express = require('express');
const parser = require('./directory/bodyParser')
const routes = require('./directory/routes');

const app = express();
const PORT = process.env.PORT || 5000;

parser(app)
routes(app)

app.listen(PORT, () => {
    console.log(`example app listening at http://localhost:${PORT}`)
});
