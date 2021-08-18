const express = require('express')
const router = express.Router()
const TDTController = require('./controllers/TDTController')

  

router.get('/ping', TDTController.ping)
router.get('/all', TDTController.all)
router.get('/allcustomers', TDTController.allCustomers)
router.get('/users', TDTController.one)
router.post('/productadd', TDTController.newProduct)
router.post('/clienteadd', TDTController.newCustomer)
router.post('/vendaadd', TDTController.newSell)
router.put('/ticket/:id', TDTController.edit)
router.delete('/ticket/:id', TDTController.delete)


module.exports = router