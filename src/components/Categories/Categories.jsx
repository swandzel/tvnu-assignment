import "./Categories.scss";

const Categories = ({ query, setQuery }) => {
  const handleChange = (e) => {
    setQuery({ ...query, [e.target.name]: !query[e.target.name] });
  };

  return (
    <div className="categories">
      <div className="categories--title">Categories:</div>
      <form>
        <div className="categories--input">
          <input
            type="checkbox"
            id="series"
            name="series"
            checked={query.series}
            onChange={handleChange}
          />
          <label htmlFor="series">Series</label>
        </div>
        <div className="categories--input">
          <input
            type="checkbox"
            id="movie"
            name="movie"
            checked={query.movie}
            onChange={handleChange}
          />
          <label htmlFor="movie">Movie</label>
        </div>
      </form>
    </div>
  );
};

export default Categories;
