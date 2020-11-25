import React, { useContext } from "react";

// importing that same context we created and provided
import CountContext from "../utils/CountContext";

const Count = () => {
  // loading (consuming) state and dispatch from the context
  const [state, dispatch] = useContext(CountContext);

  return (
    <>
      <h1>Hi. Here's the text:</h1>
      <h1>&gt;&gt;&gt;{state.text}&lt;&lt;&lt;</h1>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "add", number: 2 })}>Increase by 2</button>
      <button onClick={() => dispatch({ type: "subtract", number: 2 })}>
        Decrease by 2
      </button>
    </>
  );
};
export default Count;
