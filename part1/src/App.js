import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);

  const hello = (who) => () => console.log("hello", who);

  const setToValue = (newValue) => () => {
    setValue(newValue);
  };

  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>1000</button>
      <button onClick={setToValue(value + 1)}>++</button>
    </div>
  );
};

export default App;
