export const sortBy = (type, programs) => {
  if (type === "ASC") {
    const onlyWithImdb = programs.filter((program) => program.imdb !== null);
    const sorted = onlyWithImdb.sort((a, b) =>
      a.imdb.rating > b.imdb.rating ? -1 : 1
    );
    return sorted;
  }

  if (type === "DESC") {
    const onlyWithImdb = programs.filter((program) => program.imdb !== null);
    const sorted = onlyWithImdb.sort((a, b) =>
      a.imdb.rating > b.imdb.rating ? 1 : -1
    );
    return sorted;
  }
  return;
};
