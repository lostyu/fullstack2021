import React, { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ text, value }) => {
  return (
    <tr>
      <td>{text} </td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = (good - bad) / all || 0;
  const positive = all <= 0 ? "0" : (good / all) * 100 + "%";
  const show = all > 0;

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <h2>Statistic</h2>
      <table>
        <tbody>
          {show ? (
            <>
              <Statistics text="good" value={good} />
              <Statistics text="neutral" value={neutral} />
              <Statistics text="bad" value={bad} />
              <Statistics text="all" value={all} />
              <Statistics text="average" value={average} />
              <Statistics text="positive" value={positive} />
            </>
          ) : (
            <tr><td>No feedback given</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
