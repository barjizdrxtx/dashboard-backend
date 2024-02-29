const order = require('./order.schema');

class orderService {

    // Retrieve all orders
    async getAllOrders() {
        return await order.find();
    }

    // Retrieve an order by its ID
    async getOrderById(id) {
        return await order.findById(id);
    }

    // Create a new order
    async createOrder(data) {
        return await order.create(data);
    }

    // Update an existing order
    async updateOrder(id, data) {
        return await order.findByIdAndUpdate(id, data, { new: true });
    }

    // Delete an order by its ID
    async deleteOrder(id) {
        return await order.findByIdAndDelete(id);
    }
}


module.exports = new orderService();
