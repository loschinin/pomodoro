import React, { useCallback, useEffect, useState } from 'react';
import sound from './sound.mp3';
import './Timer.css';

const addZero = (number: number) =>
  number < 10 ? `0${number}` : number;

const convertMS = (value: number, onlyMin?: boolean) => {
  const hours = Math.floor(value / 3600);
  const minutes = Math.floor((value - hours * 3600) / 60);
  const seconds = value - hours * 3600 - minutes * 60;
  return onlyMin
    ? minutes
    : `${addZero(minutes)}:${addZero(seconds)}`;
};

const Timer = () => {
  const [counter, setCounter] = useState(0);
  const [counterId, setCounterId] = useState(0);
  const [isStartDisabled, setIsStartDisabled] = useState(false);
  const [goalTime, setGoalTime] = useState(5);
  const [isGoalTimeEdit, setIsGoalTimeEdit] = useState(false);

  const stopCounter = useCallback(() => {
    clearInterval(counterId);
    setCounter(0);
    setIsStartDisabled(false);
  }, [counterId]);

  useEffect(() => {
    console.log({ goalTime });
    console.log(counter);
    if (goalTime === counter) {
      const ding = new Audio(sound);
      ding.play();
      stopCounter();
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
      {convertMS(counter)}
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
          {convertMS(goalTime)}
        </span>
      )}
    </div>
  );

  function startCounter() {
    const id = setInterval(() => {
      setCounter(prevState => prevState + 1);
    }, 1000);
    console.log(id);
    setCounterId(+id);
    setIsStartDisabled(true);
  }

  function pauseCounter() {
    clearInterval(counterId);
    setIsStartDisabled(false);
  }
};

export default Timer;
