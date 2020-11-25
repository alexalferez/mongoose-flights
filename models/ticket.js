const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: String,
    price: Number,
    flightNo: ['flightSchema.flightNo']
},{
    timestamps: true
});

module.exports = mongoose.model('tickets', ticketSchema);