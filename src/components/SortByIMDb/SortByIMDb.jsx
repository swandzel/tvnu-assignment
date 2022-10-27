import "./SortByIMDb.scss";
import ArrowDown from "../../assets/arrow-down.svg";
import ArrowUp from "../../assets/arrow-up.svg";

const SortByIMDb = () => {
  return (
    <div className="sort-by">
      <div className="sort-by--content">
        <div className="sort-by--title">SortByIMDb</div>
        <div className="sort-by--icons">
          <img src={ArrowUp} alt="Arrow Up" />
          <img src={ArrowDown} alt="Arrow Down" />
        </div>
      </div>
    </div>
  );
};

export default SortByIMDb;
