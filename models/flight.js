const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: String,
  arrival: Date
 }, {
   timestamps: true
 });

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest' ,'Delta',  'United'],
        required: true
    },
    airport: String,
    flightNo: {
      type: Number,
      min: 10,
      max: 9999
    },
    departure: {
        type: Number,
        default: function () {
          return new Date().getFullYear();
        }
    },
    destinations: [destinationSchema]
},{
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);