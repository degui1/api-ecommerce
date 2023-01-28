const { Router } = require('express');
const router = Router()
const ProductController = require('../controllers/productsController')

router
    .post('/products',ProductController.post)
    .get('/products',ProductController.getAll)
    .put('/products/:id',ProductController.put)
    .get('/products/:id',ProductController.get)
    .delete('/products/:id',ProductController.delete)


module.exports = router