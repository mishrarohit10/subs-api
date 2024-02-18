const mongoose = require("mongoose")

const subsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    subscribed:{
        type: String,
        required: true
    },
    subsDate:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Subscriber', subsSchema)
