import React, { useState } from 'react';
import './Main.css';
import Task from '../Task/Task';
import Timer from '../Timer/Timer';
import SortIcon from '@mui/icons-material/Sort';
import AddIcon from '@mui/icons-material/Add';
import { Button, Input, ToggleButton } from '@mui/material';

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
  const [isSortedByNew, setIsSortedByNew] = useState(false);

  return (
    <div className={'main'}>
      <div className={'title'}>Timer</div>
      <Timer />
      <div className={'title'}>Add new task</div>
      <div className={'adding'}>
        <Input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder={'Please, white some task text'}
          className={'text-input'}
          autoFocus
        />{' '}
        <Button
          disabled={!text}
          onClick={() => {
            setTasks([
              { done: false, task: text, date: new Date() },
              ...tasks,
            ]);
            setText(initialText);
          }}
          variant={'contained'}
        >
          <AddIcon />
        </Button>
      </div>
      <div className={'title'}>
        Tasks sorting by date{' '}
        <ToggleButton
          value="check"
          selected={isSortedByNew}
          onChange={handleSort}
          size={'small'}
        >
          <SortIcon
            fontSize={'small'}
            className={isSortedByNew ? 'rotated-sort-icon' : ''}
          />
        </ToggleButton>
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

  function handleSort() {
    setIsSortedByNew(!isSortedByNew);
    setTasks([
      ...tasks.sort((a, b) => {
        if (isSortedByNew) {
          return b.date.valueOf() - a.date.valueOf();
        } else {
          return a.date.valueOf() - b.date.valueOf();
        }
      }),
    ]);
  }
};

export default Main;
