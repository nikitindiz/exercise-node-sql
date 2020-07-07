const express = require('express');
const router = express.Router();

const ordersController = require('../controllers/orders');

router.get('/:id', ordersController.getOrder);

router.put('/:id', ordersController.updateOrder);

router.delete('/:id', ordersController.deleteOrder);

router.get('/', ordersController.getOrders);

router.post('/', ordersController.createOrder);

module.exports = router;