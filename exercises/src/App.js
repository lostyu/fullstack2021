import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import NewPerson from "./components/NewPerson";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");

  const hook = () => {
    axios.get("http://localhost:3001/persons").then((res) => {
      setPersons(res.data);
    });
  };

  useEffect(hook, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (newName !== "" && newNumber !== "") {
      if (persons.findIndex((item) => item.name === newName) !== -1) {
        alert(`${newName} is already added to phonebook`);
        return;
      }
      setNewName("");
      setNewNumber("");
      setPersons(persons.concat({ name: newName, number: newNumber }));
    }
  };

  const handleSearch = (event) => {
    setSearchName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Search searchName={searchName} handleSearch={handleSearch} />
      <h2>add a new</h2>
      <NewPerson
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} searchName={searchName} />
    </div>
  );
};

export default App;
