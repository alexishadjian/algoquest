import React, { useState, useEffect } from 'react';
import sound from '../assets/timer.mp3';

const Timer = () => {
  const [time, setTime] = useState(300);
  const [initialOffset, setInitialOffset] = useState(754);
  const [dashOffset, setDashOffset] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const [audio] = useState(new Audio(sound));
  const [audioPlayed, setAudioPlayed] = useState(false);

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
    setElapsedTime(0);
  };

  const playAudio = () => {
    audio.play()
      .then(() => {
        setAudioPlayed(true);
        resetTimer();
      })
      .catch(error => {
        console.error('Error playing audio:', error);
      });
  };

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (elapsedTime + 1 === time) {
          clearInterval(interval);
          setIsRunning(false);
          playAudio();
          return;
        }
        setDashOffset((prevOffset) => prevOffset + (initialOffset / time));
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [initialOffset, time, isRunning, audio, elapsedTime]);

  useEffect(() => {
    if (isTimerStarted) {
      startTimer();
    }
  }, [isTimerStarted]);

  useEffect(() => {
    startTimer(); // Démarrer automatiquement le timer au chargement
  }, []); // Le tableau de dépendances vide pour s'assurer que cela ne s'exécute qu'une seule fois

  const minutes = Math.floor((time - (time * dashOffset) / initialOffset) / 60);
  const seconds = Math.floor((time - (time * dashOffset) / initialOffset) % 60);

  return (
    <div className="timer-container">
      <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <g>
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
            }}
          />
          <text x="50%" y="50%" textAnchor="middle" dy="0.35em" fontSize="40" fill="#dea821">
            {isTimerStarted ? `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}` : '00:00'}
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