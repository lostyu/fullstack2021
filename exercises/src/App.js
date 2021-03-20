import React, { useState, useEffect } from "react";
import { getAll } from "./services/restCountries";
import Search from "./components/Search";
import Countries from "./components/Countries";

const App = () => {
  const [searchName, setSearchName] = useState("");
  const [countries, setCountries] = useState([]);

  const hook = () => {
    getAll().then((res) => {
      setCountries(res);
    });
  };

  useEffect(hook, []);

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };

  const entries = countries.filter((country) =>
    country.name.toUpperCase().includes(searchName.toUpperCase())
  );

  return (
    <div>
      <Search searchName={searchName} handleSearchChange={handleSearchChange} />
      <Countries countries={entries}/>
    </div>
  );
};

export default App;
