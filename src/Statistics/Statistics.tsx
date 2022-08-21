import React, { useState } from 'react';
import './Statistics.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { Button } from '@mui/material';
import { timeConverter } from '../helpers';
import { chartOptions } from './chartOptions';

const convertDate = (date: Date | string) =>
  new Date(moment(date).format('ddd D MMM')).valueOf();

type Data = { name: string; y: number };
type DataForStorage = { date: string; time: number };

const Statistics = () => {
  const hasLocalStoragePomodoroItem =
    localStorage.getItem('pomodoro');
  const data: DataForStorage[] = hasLocalStoragePomodoroItem
    ? JSON.parse(localStorage.getItem('pomodoro') || '')
    : [];

  const [selectedDaysData, setSelectedDaysData] = useState<Data[]>(
    data.map(d => ({ name: d.date, y: d.time }))
  );

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const onChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const totalUsingTimeForToday = timeConverter(
    data
      .filter(
        (obj: { date: string }) =>
          convertDate(obj.date) === convertDate(new Date())
      )
      .reduce((acc, curr) => {
        return acc + curr.time;
      }, 0)
  );

  return (
    <div className={'stat'}>
      <div className={'chart'}>
        {hasLocalStoragePomodoroItem ? (
          <>
            <div>
              <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
              />
              <Button
                className={'date-picker-button'}
                onClick={handleConfirmPeriod}
                variant={'contained'}
              >
                confirm period
              </Button>
            </div>
            <HighchartsReact
              highcharts={Highcharts}
              options={{
                ...chartOptions,
                series: [
                  {
                    date: 'Pomodoro',
                    colorByPoint: true,
                    data: selectedDaysData,
                  },
                ],
              }}
            />
          </>
        ) : (
          'No data for chart. Start to use Pomodoro'
        )}
      </div>
      <div>
        <h1>
          Total pomodoro using time for today {totalUsingTimeForToday}
        </h1>
        <h1>
          Total stops quantity{' '}
          {JSON.parse(
            localStorage.getItem('pomodoroStopQuantity') || ''
          )}
        </h1>
      </div>
    </div>
  );

  function handleConfirmPeriod() {
    const filteredData = data.filter((obj: { date: string }) => {
      const d = convertDate(obj.date);
      return (
        d >= convertDate(startDate) &&
        d <= convertDate(endDate || startDate)
      );
    });
    const convertedData = filteredData.map(d => ({
      name: d.date,
      y: d.time,
    }));
    setSelectedDaysData(convertedData);
  }
};

export default Statistics;
