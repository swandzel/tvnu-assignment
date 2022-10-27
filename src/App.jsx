import { GetPrograms } from "./api/api";
import { useEffect, useState } from "react";
import SortByIMDb from "./components/SortByIMDb/SortByIMDb";
import Categories from "./components/Categories/Categories";
import ProgramsList from "./components/ProgramsList/ProgramsList";
import "./App.scss";

const App = () => {
  const [programs, setPrograms] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetPrograms();
      setPrograms(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <SortByIMDb />
      <div className="app--main">
        <Categories />
        <ProgramsList />
      </div>
    </div>
  );
};

export default App;
