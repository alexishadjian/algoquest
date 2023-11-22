import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(300); // 300 secondes = 5 minutes
  const [initialOffset, setInitialOffset] = useState(754);
  const [dashOffset, setDashOffset] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isTimerStarted, setIsTimerStarted] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
    setIsTimerStarted(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsTimerStarted(false);
    setDashOffset(0);
  };

  useEffect(() => {
    let i = 1;
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (i === time + 1) {
          clearInterval(interval);
          setIsRunning(false);
          return;
        }
        setDashOffset((prevOffset) => prevOffset + (initialOffset / time));
        i++;
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [initialOffset, time, isRunning]);

  const minutes = Math.floor((time - (time * dashOffset) / initialOffset) / 60);
  const seconds = Math.floor((time - (time * dashOffset) / initialOffset) % 60);

  return (
    <div className="timer-container">
      <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <g>
          <title>Layer 1</title>
          <circle
            className="circle_animation"
            r="120"
            cy="150"
            cx="150"
            strokeWidth="30"
            stroke="#dea821"
            fill="none"
            style={{
              strokeDasharray: initialOffset,
              strokeDashoffset: isTimerStarted ? dashOffset : initialOffset,
              transition: 'stroke-dashoffset 1s linear',
              transform: 'rotate(-90deg) scaleY(-1)',
              transformOrigin: '50% 50%',
              // strokeLinecap: 'round',
            }}
          />
          <text x="50%" y="50%" textAnchor="middle" dy="0.35em" fontSize="40" fill="#dea821">
            { isTimerStarted ? `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}` : '00:00'}
          </text>
        </g>
      </svg>
      <div className="button-container">
        <button className="primary" onClick={isRunning ? pauseTimer : startTimer}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        {isTimerStarted && (
          <button className="secondary" onClick={resetTimer}>Reset</button>
        )}
      </div>
    </div>
  );
};

export default Timer;