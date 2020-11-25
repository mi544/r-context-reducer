import React, { useReducer } from "react";
import Count from "./components/Count";

// importing the context to use in other components
import CountContext from "./utils/CountContext";

// creating a reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, count: state.count + action.number };
    case "subtract":
      return { ...state, count: state.count - action.number };
    default:
      return state;
  }
};

const App = () => {
  // using useReducer to create a global state
  const [state, dispatch] = useReducer(reducer, { count: 0, text: "hello" });

  return (
    // providing state and dispatch in context to all components
    <CountContext.Provider value={[state, dispatch]}>
      <Count />
    </CountContext.Provider>
  );
};

export default App;
