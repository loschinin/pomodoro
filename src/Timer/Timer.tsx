import React, { useCallback, useEffect, useState } from 'react';
import sound from './sound.mp3';
import './Timer.css';
import moment from 'moment';

const addZero = (number: number) =>
  number < 10 ? `0${number}` : number;

export const timeConverter = (
  value: number,
  onlyMin?: boolean,
  withHours?: boolean
) => {
  const hours = Math.floor(value / 3600);
  const minutes = Math.floor((value - hours * 3600) / 60);
  const seconds = value - hours * 3600 - minutes * 60;
  if (withHours) {
    return `${addZero(hours)}:${addZero(minutes)}:${addZero(
      seconds
    )}`;
  }
  return onlyMin
    ? minutes
    : `${addZero(minutes)}:${addZero(seconds)}`;
};

const Timer = () => {
  const [counter, setCounter] = useState(0);
  const [counterId, setCounterId] = useState(0);
  const [isStartDisabled, setIsStartDisabled] = useState(false);
  const [goalTime, setGoalTime] = useState(2);
  const [isGoalTimeEdit, setIsGoalTimeEdit] = useState(false);

  const stopCounter = useCallback(() => {
    clearInterval(counterId);
    setCounter(0);
    setIsStartDisabled(false);
  }, [counterId]);

  useEffect(() => {
    if (goalTime === counter) {
      const now = new Date();
      const ding = new Audio(sound);
      ding.play();
      stopCounter();
      const prevData = localStorage.getItem('pomodoro')
        ? JSON.parse(localStorage.getItem('pomodoro') || '')
        : [];
      const newData = {
        name: moment(now.toString()).format('ddd D MMM HH:mm:ss'),
        y: counter,
      };

      localStorage.setItem(
        'pomodoro',
        JSON.stringify([...prevData, newData])
      );
    }
  }, [goalTime, counter, stopCounter]);

  return (
    <div className={'timer'}>
      <button
        onClick={() => startCounter()}
        disabled={isStartDisabled}
      >
        {' \u23F3 '}
      </button>
      {timeConverter(counter)}
      <button onClick={() => pauseCounter()}>{' \u23F8 '}</button>
      <button onClick={() => stopCounter()}>{' \u23F9 '}</button>
      GOAL
      {isGoalTimeEdit ? (
        <input
          type={'number'}
          value={goalTime}
          onChange={e => setGoalTime(+e.target.value)}
          onBlur={() => setIsGoalTimeEdit(false)}
          autoFocus
          className={'timer-input'}
          title={'Onblur to save'}
        />
      ) : (
        <span
          onDoubleClick={() => setIsGoalTimeEdit(true)}
          title={'Double click to Edit'}
          className={'goal-time'}
        >
          {timeConverter(goalTime)}
        </span>
      )}
    </div>
  );

  function startCounter() {
    const id = setInterval(() => {
      setCounter(prevState => prevState + 1);
    }, 1000);
    setCounterId(+id);
    setIsStartDisabled(true);
  }

  function pauseCounter() {
    clearInterval(counterId);
    setIsStartDisabled(false);
  }
};

export default Timer;
