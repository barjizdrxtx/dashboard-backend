const mongoose = require('mongoose');

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
