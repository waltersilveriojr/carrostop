import "./styles.css";

const Search = () => {
  return (
    <div className="search-container">
      <div className="search-imput">
        <input placeholder="Digite sua busca"></input>
      </div>
      <div className="search-button">
        <button className="btn btn-primary">
            <h6>BUSCAR</h6>
        </button>
      </div>
    </div>
  );
};

export default Search;