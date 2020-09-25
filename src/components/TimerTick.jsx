import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import './TimerTick.css';

const TimerTick = ({ expiredTime }) => {
  const [date, setDate] = useState(moment());

  const tempTime = moment(expiredTime);

  const remainTime = tempTime - moment();

  useEffect(() => {
    setTimeout(() => {
      setDate(moment());
    }, 1000);
  });
  return (
    <div className="TimerTick">
      <div>{date.format('현재시간 : MM/DD, HH:mm:ss')}</div>
      <br />
      <div>{tempTime.format('1차 목표 완성 기한 : MM월DD일 HH시')}</div>
      <br />
      <strong className="timeleft">
        {tempTime.fromNow(true)} ({(remainTime / 1000 / 60 / 60).toFixed(0)}시간)남음
      </strong>
    </div>
  );
};

export default TimerTick;
