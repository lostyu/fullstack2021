const Country = ({ name, handleClickShow }) => {
  return (
    <div>
      {name} <button onClick={() => handleClickShow(name)}>show</button>
    </div>
  );
};

export default Country;
