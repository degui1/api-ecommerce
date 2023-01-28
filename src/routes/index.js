const bodyParser = require(`body-parser`);
const products = require('./productsRoutes')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(products)
}