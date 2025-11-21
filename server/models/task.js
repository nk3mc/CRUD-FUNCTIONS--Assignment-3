// models/task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  completed: {
    type: Boolean,
    default: false  // Set default value to false (i.e., the task is incomplete by default)
  }
});

module.exports = mongoose.model('Task', taskSchema);
