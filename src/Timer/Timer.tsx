import React, { useCallback, useEffect, useState } from 'react';
import sound from './sound.mp3';
import './Timer.css';
import moment from 'moment';
import Button from '@mui/material/Button';
import TimerIcon from '@mui/icons-material/Timer';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import { TextField } from '@mui/material';
import { timeConverter } from '../helpers';

const Timer = () => {
  const [counter, setCounter] = useState(0);
  const [counterId, setCounterId] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [goalTime, setGoalTime] = useState(599);
  const [stopQuantity, setStopQuantity] = useState<number>(
    localStorage.getItem('pomodoroStopQuantity')
      ? +JSON.parse(
          localStorage.getItem('pomodoroStopQuantity') || ''
        )
      : 0
  );
  const [isGoalTimeEdit, setIsGoalTimeEdit] = useState(false);

  const stopCounter = useCallback(() => {
    clearInterval(counterId);
    setCounter(0);
    setIsStarted(false);
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
        date: moment(now.toString()).format('ddd D MMM HH:mm:ss'),
        time: counter,
      };

      localStorage.setItem(
        'pomodoro',
        JSON.stringify([...prevData, newData])
      );
    }
  }, [goalTime, counter, stopCounter]);

  useEffect(() => {
    localStorage.setItem(
      'pomodoroStopQuantity',
      JSON.stringify(stopQuantity)
    );
  }, [stopQuantity]);

  return (
    <div className={'timer'}>
      <Button
        onClick={isStarted ? pauseCounter : startCounter}
        variant={'contained'}
      >
        {isStarted ? <PauseIcon /> : <TimerIcon />}
      </Button>
      <div className={'counter'}>{timeConverter(counter)}</div>
      <Button
        onClick={stopHandler}
        variant={'contained'}
        disabled={counter === 0}
      >
        <StopIcon />
      </Button>
      GOAL
      {isGoalTimeEdit ? (
        <TextField
          type={'number'}
          value={goalTime}
          variant={'filled'}
          label={'seconds'}
          onChange={e => setGoalTime(+e.target.value)}
          onBlur={() => setIsGoalTimeEdit(false)}
          autoFocus
          className={'timer-input'}
          title={'Onblur to save'}
          size={'small'}
        />
      ) : (
        <span
          onClick={() => setIsGoalTimeEdit(true)}
          title={'Click to Edit'}
          className={'goal-time'}
          children={timeConverter(goalTime)}
        />
      )}
    </div>
  );

  function startCounter() {
    const id = setInterval(() => {
      setCounter(prevState => prevState + 1);
    }, 1000);
    setCounterId(+id);
    setIsStarted(true);
  }

  function pauseCounter() {
    clearInterval(counterId);
    setIsStarted(false);
  }

  function stopHandler() {
    stopCounter();
    setStopQuantity(prev => prev + 1);
  }
};

export default Timer;
