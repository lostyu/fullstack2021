import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "007-5512-666" },
  ]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const addPhoneBook = (event) => {
    event.preventDefault();

    if (newName !== "" && number !== "") {
      if (persons.findIndex((item) => item.name === newName) !== -1) {
        alert(`${newName} is already added to phonebook`);
        return;
      }
      setNewName("");
      setNumber("");
      setPersons(persons.concat({ name: newName, number: number }));
    }
  };

  return (
    <div>
      <div>debug: {newName}</div>
      <div>debug: {number}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addPhoneBook}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          number: <input value={number} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
