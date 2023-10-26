import { useEffect, useState } from "react";
import { days, hours, minutes, seconds } from "../../shared/timeEndOfYear";
import { Time, TimerTitle, TimerWrapper, TimersWrapper } from "./Timers.styled";

const Timers = ({ date }) => {
  const [, setDateTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const oneDay = 86400000;
  const year = new Date(new Date().getFullYear() + 1, 0, 1).getTime();
  const diff = year + oneDay - new Date().getTime();
  const millisecondsEnd = date.valueOf();
  const dateNow = Date.now();
  const raznica = millisecondsEnd - dateNow;

  const time = {
    days: days(diff),
    hours: hours(diff),
    minutes: minutes(diff),
    seconds: seconds(diff),
  };

  const timeOfRaznica = {
    days: days(raznica),
    hours: hours(raznica),
    minutes: minutes(raznica),
    seconds: seconds(raznica),
  };

  return (
    <TimersWrapper>
      <div>
        <TimerTitle>Years countdown</TimerTitle>
        <TimerWrapper>
          <Time>
            {time.days}:{time.hours}:{time.minutes}:{time.seconds}
          </Time>
          <p>DAYS HRS MINS SECS</p>
        </TimerWrapper>
      </div>
      <div>
        <TimerTitle>Goals countdown</TimerTitle>
        <TimerWrapper>
          <Time>
            {timeOfRaznica.days}:{timeOfRaznica.hours}:{timeOfRaznica.minutes}:
            {timeOfRaznica.seconds}
          </Time>
          <p>DAYS HRS MINS SECS</p>
        </TimerWrapper>
      </div>
    </TimersWrapper>
  );
};

export default Timers;
