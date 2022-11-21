const express = require('express');
const router = express.Router();
const todoController = require('../Controllers/todoController');

router.get('/allTasks', todoController.allTasks);

router.post('/addTask', express.json(), todoController.addTask);

router.put('/changeState/:id', express.json(), todoController.changeState);

router.delete('/deleteTask/:id', todoController.deleteTask);

module.exports = router;
