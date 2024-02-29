// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('./order.controller');

router.get('/', orderController.getAllOrders);

router.get('/:id', orderController.getOrderById);

router.post('/', orderController.createOrder);

router.patch('/:id', orderController.updateOrder);

router.delete('/:id', orderController.deleteOrder);

module.exports = router;
