import React, { useEffect, useState } from 'react';
import ListTasks from './components/AllTasks';
import ProgressBar from './components/ProgressBar';
import {
  ButtonAdd,
  Container,
  Footer,
  Form,
  Img,
  Input,
  Link,
  Main,
  Option,
  Select,
  Title,
} from './styles/style';

function App() {
  const [data, setData] = useState(null);
  const [task, setTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetch('/todo/allTasks')
      .then((res) => {
        return res.json();
      })
      .then((tasks) => {
        setData(tasks);
      });
  }, []);

  useEffect(() => {
    if (data) {
      const completed = data.filter((item) => {
        return item.completed === 'true';
      });

      setProgress({ completed: completed.length, data: data.length });
    }
  }, [data]);

  function addTask() {
    let method = 'POST';
    let headers = { 'Content-Type': 'application/json' };
    let body = JSON.stringify({ task, completed: 'false' });
    if (task !== '') {
      fetch('/todo/addTask', { headers, method, body })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
          setTask('');
        });
    } else alert('Write a task in the field below');
  }

  function changeFilter(e) {
    setFilter(e.target.value);
  }

  function changeState(e) {
    fetch(`/todo/changeState/${e.target.id}`, { method: 'PUT' })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  }
  function deleteTask(e) {
    fetch(`/todo/deleteTask/${e.target.id}`, { method: 'DELETE' })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  }
  function getValue(e) {
    setTask(e.target.value);
  }
  if (data) {
    return (
      <>
        <Container>
          <Title>To Do List</Title>
          <Form>
            <Input placeholder="write your task here..." onChange={getValue} value={task}></Input>
            <ButtonAdd onClick={addTask}>
              <span className="material-symbols-outlined">add</span>
            </ButtonAdd>
            <Select onChange={changeFilter}>
              <Option value="all">All</Option>
              <Option value="true">Complete</Option>
              <Option value="false">Incomplete</Option>
            </Select>
          </Form>
          <Main>
            <ListTasks
              tasks={data}
              filter={filter}
              changeState={changeState}
              deleteTask={deleteTask}
            />
          </Main>
          <ProgressBar progress={progress} />
        </Container>
        <Footer>
          <Link href="https://github.com/Ryan-012">
            <Img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          </Link>
          <Link href="https://www.linkedin.com/in/ryan-arag%C3%A3o-8b3152216/">
            <Img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
          </Link>
        </Footer>
      </>
    );
  }
}
export default App;
