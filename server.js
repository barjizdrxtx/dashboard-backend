const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const orderRoutes = require('./src/order/order.routes');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    });

app.use(express.json());
app.use(cors());
app.use('/api/order', orderRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
