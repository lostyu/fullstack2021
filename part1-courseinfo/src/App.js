import React from "react";

const Part = (props) => (
  <p>
    {props.name} {props.exercises}
  </p>
);
const Header = (props) => <h1>{props.course}</h1>;
const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => (
        <Part {...part} />
      ))}
    </div>
  );
};
const Total = (props) => (
  <p>
    Number of exercises{" "}
    {props.parts.reduce((sum, currentValue) => sum + currentValue.exercises, 0)}
  </p>
);

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
