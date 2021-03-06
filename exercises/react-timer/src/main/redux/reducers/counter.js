import React from "react"



const initialState = {
  startedAt: undefined,
  stoppedAt: undefined,
  baseTime: undefined
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "RESET_TIMER":
      return {
        ...state,
        baseTime: 0,
        startedAt: state.startedAt ? action.now : undefined,
        stoppedAt: state.stoppedAt ? action.now : undefined
      };
    case "START_TIMER":
      return {
        ...state,
        baseTime: action.baseTime,
        startedAt: action.now,
        stoppedAt: undefined
      };
    case "STOP_TIMER":
      return {
        ...state,
        stoppedAt: action.now
      }
    default:
      return state;
  }
}

const store = createStore(reducer);
