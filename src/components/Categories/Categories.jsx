import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      Categories:
      <div>
        <input type="checkbox" id="series" name="series" value="series" />
        <label htmlFor="series">Series</label>
      </div>
      <div>
        <input type="checkbox" id="series" name="series" value="series" />
        <label htmlFor="series">Series</label>
      </div>
    </div>
  );
};

export default Categories;
