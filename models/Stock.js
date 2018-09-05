const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StockSchema = new Schema ({
    Supplier: {
        type: String,
        required: true
    },
    Product: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
})


module.exports = mongoose.model('Stock',StockSchema )