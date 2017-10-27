import React from "react";


function startTimer(baseTime = 0) {
  return {
    type: "START_TIMER",
    baseTime: baseTime,
    now: new Date().getTime()
  };
}

function stopTimer() {
  return {
    type: "STOP_TIMER",
    now: new Date().getTime()
  };
}

function resetTimer() {
  return {
    type: "RESET_TIMER",
    now: new Date().getTime()
  }
}
export default counter
