import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";

function App() {
  const [category, setCategory] = useState("top");

  const [mode, setMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  console.log(mode);

  function toggleFunction() {
    setMode((pre) => !pre);
  }

  function searchFunction(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <>
      <Navbar
        setCategory={setCategory}
        toggleFunction={toggleFunction}
        mode={mode}
        searchFunction={searchFunction}
      />
      <NewsBoard category={category} mode={mode} searchQuery={searchQuery} />
    </>
  );
}

export default App;
