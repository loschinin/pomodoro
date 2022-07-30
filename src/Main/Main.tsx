import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './Main.css';
import Task from '../Task/Task';

const mockData = [
  'Statistic. This is my second task - create statistics page in app',
  'App main Page. This is my first task - create main page in app',
];

const Main = () => {
  const [tasks, setTasks] = useState<string[]>(mockData);

  const initialText = `This is my new task`;
  const [text, setText] = useState(initialText);

  return (
    <div className={'tasks'}>
      <div className={'adding'}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder={'Please, white some task text'}
          className={'text-input'}
          autoFocus
        />{' '}
        <button
          disabled={!text}
          onClick={() => {
            setTasks([text, ...tasks]);
            setText(initialText);
          }}
        >
          +
        </button>
      </div>
      <div className={'sorting'}>
        <button
          onClick={() => {
            setTasks([...tasks.sort((a, b) => a.localeCompare(b))]);
          }}
        >
          sort asc
        </button>
        <button
          onClick={() => {
            setTasks([...tasks.sort((a, b) => b.localeCompare(a))]);
          }}
        >
          sort desc
        </button>
      </div>
      <div style={{ borderBottom: '1px solid white' }} />
      {tasks.map((task, index) => (
        <Task
          key={Math.random()}
          id={index}
          title={task}
          removeTask={() => removeTask(index)}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </div>
  );

  function removeTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
  }
};

export default Main;
