import "./Categories.scss";

const Categories = ({ query, setQuery }) => {
  const handleChange = (e) => {
    setQuery({ ...query, [e.target.name]: !query[e.target.name] });
  };

  return (
    <div className="categories">
      Categories:
      <div>
        <input
          type="checkbox"
          id="series"
          name="series"
          checked={query.series}
          onChange={handleChange}
        />
        <label htmlFor="series">Series</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="movie"
          name="movie"
          checked={query.movie}
          onChange={handleChange}
        />
        <label htmlFor="movie">Movie</label>
      </div>
    </div>
  );
};

export default Categories;
