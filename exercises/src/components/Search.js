const Search = ({ searchName, handleSearchChange }) => {
  return <input value={searchName} onChange={handleSearchChange} />;
};

export default Search;
