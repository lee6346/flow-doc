const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusinessGroupSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  members: {
    type: String,
    required: true
  },
  interestedDataType: {
    type: String,
    required: true
  }
});

const BusinessGroup = mongoose.model('businessgroup', BusinessGroupSchema);
module.exports = BusinessGroup;