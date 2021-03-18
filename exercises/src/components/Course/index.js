const Course = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
      <strong>
        total of {course.parts.reduce((acc, part) => acc + part.exercises, 0)} exercises
      </strong>
    </div>
  );
};

export default Course;
