import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
    setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
    
  }, []);

  return (
    <div>
      <h1>Timer</h1>
      <p>Quantidade de segundos que se passaram desde que o componente foi renderizado:</p>
      <p>{seconds}</p>
    </div>
  );
}

export default Timer;