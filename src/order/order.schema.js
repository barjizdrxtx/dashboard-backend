const mongoose = require('mongoose');

// Define the schema for the order
const orderSchema = new mongoose.Schema({

  quantity: {
    type: Number,
    default: 1
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});


module.exports = mongoose.model('Order', orderSchema);
