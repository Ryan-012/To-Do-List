const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: { type: String, require: true },
  completed: { type: String, require: true },
});

module.exports = mongoose.model('task', taskSchema);
