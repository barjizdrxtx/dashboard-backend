const order = require('./order.schema');

class orderService {

    async getAllOrders() {
        return await order.find();
    }

    async getOrderById(id) {
        return await order.findById(id);
    }

    async createOrder(data) {
        return await order.create(data);
    }

    async updateOrder(id, data) {
        return await order.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteOrder(id) {
        return await order.findByIdAndDelete(id);
    }
}

module.exports = new orderService();
