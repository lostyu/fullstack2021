import Country from "./Country";

const Countries = ({ countries }) => {
  const countryHtml = () => {
    const len = countries.length;
    if (len >= 10) {
      return <div>Too many matches, specify another filter</div>;
    }

    if (len > 1 && len < 10) {
      return (
        <>
          {
            countries.map(country => <p key={country.name}>{country.name}</p>)
          }
        </>
      )
    }

    if (len === 1) {
      return <Country {...countries[0]}/>
    }
  };

  return <div>{countryHtml()}</div>;
};

export default Countries;
