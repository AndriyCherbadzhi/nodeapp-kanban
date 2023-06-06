const bodyParserPackage = require('body-parser');

function parser(app){
app.use(bodyParserPackage.urlencoded({extended: false}))

app.use(bodyParserPackage.json())
}

module.exports = parser;
