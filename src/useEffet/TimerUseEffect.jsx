import { useEffect, useState } from "react";

const TimerUseEffect = () => {
  const [timer, settimer] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      settimer(new Date());
    }, 1000);
  });
  return (
    <div className="d-flex justify-content-center align-content-center p-10 h-75 bg-info">
      <strong>{timer.toLocaleString()}</strong>
    </div>
  );
};

export default TimerUseEffect;
