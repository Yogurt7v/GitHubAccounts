import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState({ m: 0, s: 0, ms: 0 });
  const [interv, setInterv] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  let updateM = time.m;
  let updateS = time.s;
  let updateMS = time.ms;
  const update = () => {
    if (updateM === 60) {
      alert("Time's up");
      resetWatch();
      updateM = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateMS === 100) {
      updateS++;
      updateMS = 0;
    }
    updateMS++;
    return setTime({ m: updateM, s: updateS, ms: updateMS });
  };

  const startWatch = () => {
    update();
    setInterv(setInterval(update, 100));
    setIsRunning(true);
  };
  const stopWatch = () => {
    setIsRunning(false);
    clearInterval(interv);
  };

  const resetWatch = () => {
    stopWatch();
    setIsRunning(false);
    setTime({ m: 0, s: 0, ms: 0 });
  };

  return (
    <div className="app">
      <h3>Stopwatch</h3>
      <div className="stopwatch-card">
        <div className="time">
          <p>
            {time.m >= 10 ? time.m : "0" + time.m} :{" "}
            {time.s >= 10 ? time.s : "0" + time.s} :{" "}
            {time.ms >= 10 ? time.ms : "0" + time.ms}{" "}
          </p>
        </div>
        <div className="buttons">
          {!isRunning && (
            <button onClick={startWatch} className="start">
              Go!
            </button>
          )}
          {isRunning && <button onClick={stopWatch}>Pause</button>}
          {isRunning && <button onClick={resetWatch}>Reset</button>}
        </div>
      </div>
    </div>
  );
}

export default App;
