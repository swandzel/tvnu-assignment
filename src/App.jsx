import { GetPrograms } from "./api/api";
import { useEffect, useState } from "react";
import SortByIMDb from "./components/SortByIMDb/SortByIMDb";
import Categories from "./components/Categories/Categories";
import ProgramsList from "./components/ProgramsList/ProgramsList";
import "./App.scss";

const App = () => {
  const [programs, setPrograms] = useState(null);
  const [query, setQuery] = useState({
    series: true,
    movie: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetPrograms(query);
      setPrograms(data);
    };
    fetchData();
  }, [query]);

  return (
    <div className="app">
      <SortByIMDb />
      <div className="app--main">
        <Categories query={query} setQuery={setQuery} />
        <ProgramsList programs={programs} />
      </div>
    </div>
  );
};

export default App;
