import "./ProgramsItem.scss";

const ProgramsItem = () => {
  return (
    <section className="programs-item">
      <div className="programs-item--image"></div>
      <div className="programs-item--content">
        <h2 className="programs-item--title">TITLE</h2>
        <p className="programs-item--genres">THRILLER ACTION DRAMA</p>
        <p className="programs-item--streaming">Streaming: Netflix HBO</p>
      </div>
      <div className="programs-item--imdb">
        <span className="programs-item--imdb--score">7.8</span>
        <span>IMDb</span>
      </div>
    </section>
  );
};

export default ProgramsItem;
