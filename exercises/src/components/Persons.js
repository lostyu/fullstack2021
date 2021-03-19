import Person from "./Person";

const Persons = ({ persons, searchName }) => {
  return (
    <>
      {persons
        .filter((p) => p.name.toLowerCase().includes(searchName.toLowerCase()))
        .map((person) => (
          <div key={person.name}>
            <Person {...person} />
          </div>
        ))}
    </>
  );
};

export default Persons;
