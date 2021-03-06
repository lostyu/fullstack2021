import React, { useState } from "react";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const App = () => {
  const arr = new Array(anecdotes.length);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(arr.fill(0));

  const mostVotes = Math.max(...votes);
  let mostVotesIndex = votes.indexOf(mostVotes);

  const handleClick = () => {
    const n = Math.floor(Math.random() * anecdotes.length);
    setSelected(n);
  };

  const handleVote = () => {
    const v = [...votes];
    v[selected] += 1;
    setVotes(v);
  };

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>has votes {votes[selected]}</div>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next</button>

      <h2>Anecdote with most votes</h2>
      <div>{anecdotes[mostVotesIndex]}</div>
    </>
  );
};

export default App;
