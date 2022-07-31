import React, { FC, useState } from 'react';
import './Task.css';
import moment from 'moment';
import { TaskType } from '../Main/Main';

const Task: FC<{
  index: number;
  title: string;
  date: Date;
  isChecked: boolean;
  removeTask(): void;
  tasks: TaskType[];
  setTasks(tasks: TaskType[]): void;
}> = ({
  index,
  title,
  date,
  isChecked,
  tasks,
  removeTask,
  setTasks,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const formattedDate = moment(date).format('ddd D MMM');
  const formattedTime = moment(date).format('HH:mm');
  return (
    <div
      className={'task'}
      onBlur={() => {
        setIsEdit(false);
        setTasks(
          tasks.map((t, i) =>
            i === index ? { ...t, task: editedTitle } : t
          )
        );
      }}
    >
      <input
        className="task-checkbox"
        type="checkbox"
        id={index.toString()}
        name={index.toString()}
        value={index.toString()}
        checked={isChecked}
        onChange={() => {
          setTasks(
            tasks.map((t, i) =>
              i === index ? { ...t, done: !isChecked } : t
            )
          );
        }}
      />
      <label htmlFor={index.toString()} />
      {isEdit ? (
        <input
          value={editedTitle}
          onChange={e => setEditedTitle(e.target.value)}
          autoFocus
          className={'task-edit-input'}
          title={'Onblur to Save'}
        />
      ) : (
        <span
          onDoubleClick={() => setIsEdit(true)}
          className={'task-title'}
          title={'Double click to Edit'}
        >
          {title}
        </span>
      )}
      <div className={'task-date-time'}>
        <span className={'task-date'}>{formattedDate}</span>
        <span className={'task-date'}>{formattedTime}</span>
      </div>
      <button onClick={() => removeTask()}>-</button>
    </div>
  );
};

export default Task;
