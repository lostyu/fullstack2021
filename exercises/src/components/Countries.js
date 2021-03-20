import React from "react";
import Country from "./Country";
import CountryDetail from "./CountryDetail";
import Weather from "./Weather";

const Countries = ({ countries, weather, handleClickShow }) => {
  const len = countries.length;

  if (len >= 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (len > 1 && len < 10) {
    return (
      <>
        {countries.map((country) => (
          <Country
            key={country.name}
            name={country.name}
            handleClickShow={handleClickShow}
          />
        ))}
      </>
    );
  } else if (len === 1) {
    return (
      <>
        <CountryDetail {...countries[0]} />
        <Weather weather={weather} />
      </>
    );
  } else {
    return <></>;
  }
};

export default Countries;
