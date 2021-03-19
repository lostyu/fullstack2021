import Person from "./Person";

const Persons = ({ persons, searchName }) => {
  return (
    <>
      {persons
        .filter((p) => p.name.toLowerCase().includes(searchName.toLowerCase()))
        .map((person) => (
          <p key={person.name}>
            <Person {...person} />
          </p>
        ))}
    </>
  );
};

export default Persons;
