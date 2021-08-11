const mongoose = require("mongoose");

const Tasks = new mongoose.Schema({
  task_name: {
    type: String,
    require: true,
  },
  day: {
    type: String,
    require: true,
  },
  time: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  current_date: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Tasks", Tasks);
