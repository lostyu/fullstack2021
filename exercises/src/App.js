import React, { useState, useEffect } from "react";
import { getAll } from "./services/restCountries";
import { currentWeather } from "./services/weather";

import Search from "./components/Search";
import Countries from "./components/Countries";

const App = () => {
  const [searchName, setSearchName] = useState("");
  const [countries, setCountries] = useState([]);
  const [weather, setWeather] = useState({});

  const hook = () => {
    getAll().then((res) => {
      setCountries(res);
    });
  };

  const hook2 = () => {
    if (countries.length === 1) {
      console.log(112233);
    }
  };

  useEffect(hook, []);
  useEffect(hook2, []);

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleClickShow = (name) => {
    setSearchName(name);
  };

  const entries = countries.filter((country) =>
    country.name.toUpperCase().includes(searchName.toUpperCase())
  );

  return (
    <div>
      <Search searchName={searchName} handleSearchChange={handleSearchChange} />
      <Countries
        countries={entries}
        weather={weather}
        handleClickShow={handleClickShow}
      />
    </div>
  );
};

export default App;
