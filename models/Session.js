var mongoose = require ('mongoose');

var sessionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Add Session name"
    }
});

var Session= mongoose.model ('Session', sessionSchema);
module.exports = Session;