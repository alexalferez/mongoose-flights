const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        required: true
    },
    airport: String,
    flightNo: Number,
    departure: {
        type: Number,
        default: function () {
          return new Date().getFullYear();
        }
      }

});

module.exports = mongoose.model('Flight', flightSchema);