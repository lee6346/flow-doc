const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeatureSchema = new Schema({
  businessGroup: {
    type: String,
    required: true
  },
  action: {
    type: String,
    required: true
  },
  dataSource: {
    type: String,
    required: true
  },
  dataType: {
    type: String,
    required: true
  },
  dataProvider: {
    type: String,
    required: true
  },
  exportDestination: {
    type: String,
    required: true
  },
  validations: {

  },
  preHook: {

  },
  postHook: {

  }
});

const Feature = mongoose.model('feature', FeatureSchema);
module.exports = Feature;