import ProgramsItem from "../ProgramsItem/ProgramsItem";
import "./ProgramsList.scss";

const ProgramsList = () => {
  return (
    <div className="programs-list">
      <ProgramsItem />
      <ProgramsItem />
      <ProgramsItem />
    </div>
  );
};

export default ProgramsList;
