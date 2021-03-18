const Course = ({ name, parts }) => {
  return (
    <div>
      <h2>{name}</h2>
      {parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
      <strong>
        total of {parts.reduce((acc, part) => acc + part.exercises, 0)}{" "}
        exercises
      </strong>
    </div>
  );
};

export default Course;
