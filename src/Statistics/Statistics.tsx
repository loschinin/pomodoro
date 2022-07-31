import React, { useState } from 'react';
import './Statistics.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const convertDate = (date: Date | string) =>
  new Date(moment(date).format('ddd D MMM')).valueOf();

const Statistics = () => {
  const hasLocalStoragePomodoroItem =
    localStorage.getItem('pomodoro');
  const data =
    hasLocalStoragePomodoroItem &&
    JSON.parse(localStorage.getItem('pomodoro') || '');

  const [selectedDaysData, setSelectedDaysData] =
    useState<{ name: string; y: number }[]>(data);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const onChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  // console.log('startDate', startDate);
  //
  // console.log('data', data);
  // console.log(selectedDaysData);
  const options = {
    chart: {
      type: 'column',
    },
    title: {
      align: 'left',
      text: 'Pomodoro activity',
    },
    subtitle: {
      align: 'left',
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      title: {
        text: 'Working time with pomodoro',
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:f}',
        },
      },
    },

    tooltip: {
      headerFormat:
        '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:f}</b<br/>',
    },

    series: [
      {
        name: 'Pomodoro',
        colorByPoint: true,
        data: selectedDaysData,
      },
    ],
  };
  return (
    <div className={'stat'}>
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
            <button
              onClick={() => {
                const filteredData = data.filter(
                  (obj: { name: string }) => {
                    const d = convertDate(obj.name);
                    return (
                      d >= convertDate(startDate) &&
                      d <= convertDate(endDate || startDate)
                    );
                  }
                );
                setSelectedDaysData(filteredData);
              }}
            >
              confirm period
            </button>
          </div>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
        </>
      ) : (
        'No data for chart. Start to use Pomodoro'
      )}
    </div>
  );
};

export default Statistics;
