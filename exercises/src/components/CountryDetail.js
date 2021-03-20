const Country = ({ name, capital, population, languages, flag }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>capital {capital}</p>
      <p>population {population}</p>
      <strong>languages</strong>
      <ul>
        {languages.map((lang) => (
          <li key={lang.name}>{lang.name}</li>
        ))}
      </ul>
      <img alt="flag" src={flag} width="120" height="120" />

      <h2>Weather in</h2>
    </div>
  );
};

export default Country;
