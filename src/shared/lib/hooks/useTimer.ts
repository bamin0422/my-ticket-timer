import { useEffect, useRef, useState } from "react";

const useCurrentTime = (defaultCurrentTime: Date) => {
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const [currentTime, setCurrentTime] = useState(defaultCurrentTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
    }, 1000);

    timeout.current = intervalId;

    return () => {
      if (timeout.current) {
        clearInterval(timeout.current);
      }
    };
  }, [defaultCurrentTime]);

  return { currentTime };
};

const padStarted = (unit: number, adjust = 0) =>
  String(unit + adjust).padStart(2, "0");

const formatTime = (diffTime: number | Date) => {
  const remainingDate = new Date(diffTime);
  const dday = Math.floor((+remainingDate - Date.now()) / 86400000);

  return {
    years: remainingDate.getUTCFullYear().toString(),
    months: padStarted(remainingDate.getUTCMonth(), 1),
    days: padStarted(remainingDate.getUTCDate()),
    hours: padStarted(remainingDate.getHours()),
    minutes: padStarted(remainingDate.getUTCMinutes()),
    seconds: padStarted(remainingDate.getUTCSeconds()),
    dday,
  };
};
useCurrentTime;
export const useTimer = (defaultCurrentTime: Date) => {
  const { currentTime } = useCurrentTime(defaultCurrentTime);

  const { years, months, days, hours, minutes, seconds } =
    formatTime(currentTime);

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
  };
};
