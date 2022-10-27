import ProgramsItem from "../ProgramsItem/ProgramsItem";
import "./ProgramsList.scss";

const ProgramsList = ({ programs }) => {
  return (
    <div className="programs-list">
      {programs?.map((program) => (
        <ProgramsItem
          key={program.id}
          title={program.title}
          providers={program.playProviders}
          genres={program.genres}
          image={program.imageLandscape}
          imdb={program.imdb}
        />
      ))}
    </div>
  );
};

export default ProgramsList;
