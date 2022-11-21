let tasks = [];
const Task = require('../Models/taskFormat');

const allTasks = async (req, res) => {
  try {
    let tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    console.log(error);
  }
};

const addTask = async (req, res) => {
  let task = new Task(req.body);

  try {
    let doc = await task.save();
    if (doc) {
      let tasks = await Task.find();
      res.send(tasks);
    }
  } catch (error) {
    console.log(error);
  }
};

const changeState = async (req, res) => {
  let id = req.params.id;
  let completed;
  let task = await Task.findOne({ _id: id });
  if (task) {
    if (task.completed == 'true') completed = 'false';
    else completed = 'true';
  }
  try {
    let doc = await Task.findByIdAndUpdate({ _id: id }, { completed });
    if (doc) {
      let tasks = await Task.find();
      res.send(tasks);
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  let id = req.params.id;
  try {
    let doc = await Task.findByIdAndDelete({ _id: id });
    if (doc) {
      let tasks = await Task.find();
      res.send(tasks);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { allTasks, addTask, changeState, deleteTask };
