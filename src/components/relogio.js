import React, { useState, useEffect } from 'react';
import "./relogio.css"
function Relogio() {
  const [horarioAtual, setHorarioAtual] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => updateTime(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  function updateTime() {
    setHorarioAtual(new Date());
  }

  return (
    <div className='clock-container'>
      <h2>{horarioAtual.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Relogio;
