import React, { FC, useState } from 'react';
import './Task.css';

const Task: FC<{
  id: number;
  title: string;
  removeTask(): void;
  tasks: string[];
  setTasks(tasks: string[]): void;
}> = ({ id, title, tasks, removeTask, setTasks }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  return (
    <div
      className={'task'}
      onDoubleClick={() => setIsEdit(true)}
      onBlur={() => {
        setIsEdit(false);
        setTasks(tasks.map((t, i) => (i === id ? editedTitle : t)));
      }}
    >
      {isEdit ? (
        <input
          value={editedTitle}
          onChange={e => setEditedTitle(e.target.value)}
          autoFocus
          className={'title-input'}
          title={'Onblur to Save'}
        />
      ) : (
        <span className={'task-title'} title={'Double click to Edit'}>
          {title}
        </span>
      )}
      <button onClick={() => removeTask()}>-</button>
    </div>
  );
};

export default Task;
