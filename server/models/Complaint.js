const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema({

  title: { type: String },
  description: { type: String },
  status: { type: String, default: 'Open' },
  comments: [
    {
      comment: String,
      commentedBy: String
    }
  ],
  createdBy: { type: String},
  creatorName: { type: String },
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date }

}, {collection: 'complaints'});

module.exports = mongoose.model('Complaint', ComplaintSchema);
