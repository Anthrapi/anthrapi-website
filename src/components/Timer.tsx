'use client';

import React, { useEffect, useState } from 'react';

// Helper to get IST time
const getISTNow = () => {
  const now = new Date();
  // IST is UTC+5:30
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utc + 5.5 * 60 * 60 * 1000);
};

// Target: 1st August, current year, 00:00:00 IST
const getTargetDate = () => {
  const now = getISTNow();
  const year =
    now.getMonth() > 7 || (now.getMonth() === 7 && now.getDate() > 1)
      ? now.getFullYear() + 1
      : now.getFullYear();
  // Month is 7 for August (0-indexed)
  return new Date(Date.UTC(year, 7, 1, 0, 0, 0) - 5.5 * 60 * 60 * 1000);
};

const Timer: React.FC = () => {
  // Helper to pad numbers with leading zero
  const pad = (num: number) => num.toString().padStart(2, '0');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = getISTNow();
      const target = getTargetDate();
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="xs:gap-3 xs:py-6 xs:text-4xl flex flex-wrap justify-center gap-2 py-4 text-3xl font-extrabold sm:gap-4 sm:py-6 sm:text-6xl md:gap-6 md:text-8xl"
      role="timer"
      aria-label={`Countdown: ${pad(timeLeft.days)} days, ${pad(timeLeft.hours)} hours, ${pad(timeLeft.minutes)} minutes, ${pad(timeLeft.seconds)} seconds`}
    >
      <div className="flex items-end">
        <time dateTime={pad(timeLeft.days)} aria-label="Days">
          {pad(timeLeft.days)} :
        </time>
      </div>
      <div className="flex items-end">
        <time dateTime={pad(timeLeft.hours)} aria-label="Hours">
          {pad(timeLeft.hours)} :
        </time>
      </div>
      <div className="flex items-end">
        <time dateTime={pad(timeLeft.minutes)} aria-label="Minutes">
          {pad(timeLeft.minutes)} :
        </time>
      </div>
      <div className="flex items-end">
        <time dateTime={pad(timeLeft.seconds)} aria-label="Seconds">
          {pad(timeLeft.seconds)}
        </time>
      </div>
    </div>
  );
};

export default Timer;
