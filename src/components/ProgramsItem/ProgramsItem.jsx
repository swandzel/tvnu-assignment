import "./ProgramsItem.scss";

const ProgramsItem = ({ title, providers, genres, image, imdb }) => {
  const splitedGenres = genres?.join(", ");
  const splitedProviders = providers
    ?.map((provider) => provider.name)
    .join(", ");
  const imageReSized = `${image}?width=300&height=200`;

  return (
    <section className="programs-item">
      <div className="programs-item--image">
        {imageReSized ? (
          <img src={imageReSized} alt={title} />
        ) : (
          <div className="programs-item--image-fallback" />
        )}
      </div>
      <div className="programs-item--about">
        <div className="programs-item--content">
          <h2 className="programs-item--title">{title}</h2>
          {splitedGenres && (
            <div className="programs-item--genres">{splitedGenres}</div>
          )}
          {providers && splitedProviders && (
            <p className="programs-item--streaming">
              Streaming: {splitedProviders}
            </p>
          )}
        </div>
        {imdb && (
          <div className="programs-item--imdb">
            <span className="programs-item--imdb--score">{imdb.rating}</span>
            <span>IMDb</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgramsItem;
