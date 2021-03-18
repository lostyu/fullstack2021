import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const addPhoneBook = (event) => {
    event.preventDefault();

    if (newName !== "") {
      if (persons.findIndex((item) => item.name === newName) !== -1) {
        alert(`${newName} is already added to phonebook`);
        return;
      }
      setNewName("");
      setPersons(persons.concat({ name: newName }));
    }
  };

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addPhoneBook}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
