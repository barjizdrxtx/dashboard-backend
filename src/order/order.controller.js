const orderService = require('./order.service');

class orderController {
    async getAllOrders(req, res) {
        try {
            const orders = await orderService.getAllOrders();

            res.status(200).json({
                success: true,
                result: orders
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                error: err.message
            });
        }
    }

    async getOrderById(req, res) {
        try {
            const order = await orderService.getOrderById(req.params.id);
            if (!order) {
                return res.status(404).json({
                    success: false,
                    error: 'order not found'
                });
            }
            res.status(200).json({
                success: true,
                result: order
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                error: err.message
            });
        }
    }

    async createOrder(req, res) {
        try {
            const order = await orderService.createOrder(req.body);
            res.status(201).json({
                success: true,
                result: order
            });
        } catch (err) {
            res.status(400).json({
                success: false,
                error: err.message
            });
        }
    }

    async updateOrder(req, res) {
        try {
            const order = await orderService.updateOrder(req.params.id, req.body);
            if (!order) {
                return res.status(404).json({
                    success: false,
                    error: 'order not found'
                });
            }
            res.status(200).json({
                success: true,
                result: order
            });
        } catch (err) {
            res.status(400).json({
                success: false,
                error: err.message
            });
        }
    }

    async deleteOrder(req, res) {
        try {
            const order = await orderService.deleteOrder(req.params.id);
            if (!order) {
                return res.status(404).json({
                    success: false,
                    error: 'order not found'
                });
            }
            res.status(200).json({
                success: true,
                message: 'order deleted successfully'
            });
        } catch (err) {
            res.status(400).json({
                success: false,
                error: err.message
            });
        }
    }
}

module.exports = new orderController();
