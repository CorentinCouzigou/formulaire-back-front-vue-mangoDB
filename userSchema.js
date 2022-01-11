const mongoose = require('mongoose');
// _id: mongoose.Schema.Types.ObjectId,
const userSchema = new mongoose.Schema({
    lastname: { type: String, require: true },
    fisrtname: { type: String, require: true }
}, { collection: 'user', versionKey: false })

module.exports = mongoose.model('User', userSchema);
