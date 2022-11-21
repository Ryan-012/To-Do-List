import React from 'react';
import { ButtonDelete, H1, List, ListItem } from '../styles/style';

function ListTasks(props) {
  const tasks = props.tasks;
  const filter = props.filter;
  const changeState = props.changeState;
  const deleteTask = props.deleteTask;

  function filterTasks(item) {
    if (filter !== 'all') return item.completed === filter;
    else return item;
  }

  const filteredTasks = tasks.filter(filterTasks);

  const task = filteredTasks.map((item) => (
    <ListItem key={item._id} id={item._id} onClick={changeState} completed={item.completed}>
      {item.task}
      <ButtonDelete onClick={deleteTask} id={item._id} completed={item.completed}>
        <span className="material-symbols-outlined" id={item._id}>
          close
        </span>
      </ButtonDelete>
    </ListItem>
  ));

  if (filteredTasks.length !== 0) return <List>{task}</List>;
  else return <H1 filter={filter}>No tasks</H1>;
}

export default ListTasks;
