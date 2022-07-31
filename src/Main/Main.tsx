import React, { useState } from 'react';
import './Main.css';
import Task from '../Task/Task';
import Timer from '../Timer/Timer';

const mockData = [
  {
    done: false,
    task: 'Statistic. This is my second task - create statistics page in app',
    date: new Date('July 17, 2022 12:45:00'),
  },
  {
    done: true,
    task: 'App main Page. This is my first task - create main page in app',
    date: new Date('June 25, 2022 03:24:00'),
  },
];

export type TaskType = { done: boolean; task: string; date: Date };

const Main = () => {
  const [tasks, setTasks] = useState<TaskType[]>(mockData);

  const initialText = `This is my new task`;
  const [text, setText] = useState(initialText);

  return (
    <div className={'tasks'}>
      <Timer />
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
            setTasks([
              { done: false, task: text, date: new Date() },
              ...tasks,
            ]);
            setText(initialText);
          }}
        >
          +
        </button>
      </div>
      <div className={'sorting'}>
        <button
          onClick={() => {
            setTasks([
              ...tasks.sort(
                (a, b) => a.date.valueOf() - b.date.valueOf()
              ),
            ]);
          }}
        >
          old
        </button>
        <button
          onClick={() => {
            setTasks([
              ...tasks.sort(
                (a, b) => b.date.valueOf() - a.date.valueOf()
              ),
            ]);
          }}
        >
          new
        </button>
      </div>

      {tasks.map((task, index) => (
        <Task
          key={Math.random()}
          index={index}
          title={task.task}
          date={task.date}
          isChecked={task.done}
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
