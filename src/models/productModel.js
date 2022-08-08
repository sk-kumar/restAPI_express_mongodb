const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    price: { type: Number, trim: true, required: true },
    availableSizes: { type: Array, enum: ['S', 'M', 'L', 'XL', 'XXL'], required: true },
    color: { type: Array, enum: ['white', 'black', 'blue', 'gray', 'yellow'], required: true },
    isFreeShipping: { type: Boolean, default: false },
    shippingCharges: { type: Number, trim: true },
}, { timestamps: true });

module.exports = mongoose.model('product', productSchema);