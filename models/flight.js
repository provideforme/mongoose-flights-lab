import mongoose from "mongoose"; 

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/,
  },

  price: {
    type: Number,
    min: 0,
  }
}, {
  timestamps: true
})

const flightSchema = new Schema ({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United', 'PanAm'],
  },

  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN',
  },

  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
  },

  departs: {
    type: Date,
  },

  tickets: [ticketSchema],

  meals: [{
    type: Schema.Types.ObjectId, ref: "Meal"
  }]
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export{
  Flight
}